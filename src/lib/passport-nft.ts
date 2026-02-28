/**
 * Offline Passport NFT Configuration
 *
 * The Offline Passport is an ERC-721 NFT issued on Base (Coinbase L2)
 * to participants who complete the 30-Day Offline Challenge.
 *
 * Architecture:
 * - Smart contract: ERC-721 with soulbound option (non-transferable by default)
 * - Chain: Base (low gas, mainstream-friendly via Coinbase wallet)
 * - Metadata: On-chain tier + off-chain JSON (IPFS or API-served)
 * - Minting: Admin-minted after challenge verification (no user gas costs)
 *
 * Tiers map to NFT metadata attributes:
 * - Explorer (7 days)   → Bronze
 * - Wayfinder (30 days) → Silver
 * - Navigator (90 days) → Gold
 * - Sage (365 days)     → Platinum
 */

export const PASSPORT_NFT_CONFIG = {
  // Base Mainnet (chain ID 8453) — switch to 84532 for Base Sepolia testnet
  chainId: 8453,
  chainName: "Base",
  rpcUrl: "https://mainnet.base.org",
  blockExplorer: "https://basescan.org",

  // Contract will be deployed here (placeholder until deployment)
  contractAddress: null as string | null,

  // NFT metadata served from our API
  metadataBaseUrl: "https://terminallyoffline.club/api/passport/metadata",
} as const;

export type PassportTier = "explorer" | "wayfinder" | "navigator" | "sage";

export interface PassportMetadata {
  name: string;
  description: string;
  image: string;
  external_url: string;
  attributes: {
    trait_type: string;
    value: string | number;
  }[];
}

export const TIER_CONFIG: Record<
  PassportTier,
  {
    name: string;
    duration: number;
    badge: string;
    color: string;
  }
> = {
  explorer: {
    name: "Explorer",
    duration: 7,
    badge: "Bronze",
    color: "#CD7F32",
  },
  wayfinder: {
    name: "Wayfinder",
    duration: 30,
    badge: "Silver",
    color: "#C0C0C0",
  },
  navigator: {
    name: "Navigator",
    duration: 90,
    badge: "Gold",
    color: "#FFD700",
  },
  sage: {
    name: "Sage",
    duration: 365,
    badge: "Platinum",
    color: "#E5E4E2",
  },
};

/**
 * Generate metadata JSON for a passport NFT.
 * This would be served from /api/passport/metadata/[tokenId]
 */
export function generatePassportMetadata(
  tier: PassportTier,
  completionDate: string,
  holderName?: string
): PassportMetadata {
  const config = TIER_CONFIG[tier];

  return {
    name: `Offline Passport — ${config.name}`,
    description: `Cryptographically verified proof of completing the ${config.duration}-Day Offline Challenge. Issued by Terminally Offline Club.`,
    image: `https://terminallyoffline.club/api/passport/image/${tier}`,
    external_url: "https://terminallyoffline.club/passport",
    attributes: [
      { trait_type: "Tier", value: config.name },
      { trait_type: "Badge", value: config.badge },
      { trait_type: "Duration (Days)", value: config.duration },
      { trait_type: "Completion Date", value: completionDate },
      { trait_type: "Soulbound", value: "Yes" },
      ...(holderName
        ? [{ trait_type: "Holder", value: holderName }]
        : []),
    ],
  };
}
