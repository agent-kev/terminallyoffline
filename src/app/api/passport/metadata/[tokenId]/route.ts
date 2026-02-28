import { NextRequest, NextResponse } from "next/server";
import {
  generatePassportMetadata,
  type PassportTier,
} from "@/lib/passport-nft";

/**
 * NFT Metadata endpoint — serves ERC-721 metadata JSON.
 *
 * In production, this would query a database to look up the token's
 * tier, completion date, and holder from the minting record.
 *
 * For now, it serves demo metadata based on token ID ranges:
 * - Token 1-999: Explorer
 * - Token 1000-4999: Wayfinder
 * - Token 5000-9999: Navigator
 * - Token 10000+: Sage
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ tokenId: string }> }
) {
  const { tokenId } = await params;
  const id = parseInt(tokenId, 10);

  if (isNaN(id) || id < 1) {
    return NextResponse.json(
      { error: "Invalid token ID" },
      { status: 400 }
    );
  }

  // Determine tier from token ID range (placeholder logic)
  let tier: PassportTier;
  if (id >= 10000) tier = "sage";
  else if (id >= 5000) tier = "navigator";
  else if (id >= 1000) tier = "wayfinder";
  else tier = "explorer";

  const metadata = generatePassportMetadata(tier, "2026-10-31");

  return NextResponse.json(metadata, {
    headers: {
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
