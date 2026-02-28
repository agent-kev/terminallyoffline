import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { TIER_CONFIG, type PassportTier } from "@/lib/passport-nft";

export const runtime = "edge";

const VALID_TIERS = new Set(Object.keys(TIER_CONFIG));

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ tier: string }> }
) {
  const { tier } = await params;

  if (!VALID_TIERS.has(tier)) {
    return new Response("Invalid tier", { status: 400 });
  }

  const config = TIER_CONFIG[tier as PassportTier];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #1C3144 0%, #1A1A1A 50%, #254636 100%)",
          fontFamily: "system-ui",
          position: "relative",
        }}
      >
        {/* Subtle dot pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.04,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Badge border */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: `3px solid ${config.color}`,
            borderRadius: 32,
            padding: "48px 64px",
            position: "relative",
          }}
        >
          {/* Logo mark */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 80,
              height: 80,
              borderRadius: 20,
              background: "linear-gradient(135deg, #2D6A4F, #1B998B)",
              marginBottom: 32,
            }}
          >
            <span style={{ fontSize: 36, fontWeight: 700, color: "white" }}>
              TO
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#F0EDE8",
              margin: 0,
              marginBottom: 8,
            }}
          >
            Offline Passport
          </h1>

          {/* Tier name */}
          <p
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: config.color,
              margin: 0,
              marginBottom: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            {config.name}
          </p>

          {/* Duration */}
          <p
            style={{
              fontSize: 18,
              color: "rgba(240, 237, 232, 0.5)",
              margin: 0,
              marginBottom: 8,
            }}
          >
            {config.duration}-Day Offline Challenge
          </p>

          {/* Verified badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginTop: 24,
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1B998B"
              strokeWidth="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span
              style={{
                fontSize: 14,
                color: "#1B998B",
                fontFamily: "monospace",
                letterSpacing: 2,
              }}
            >
              CRYPTOGRAPHICALLY VERIFIED
            </span>
          </div>
        </div>

        {/* Soulbound label */}
        <p
          style={{
            position: "absolute",
            bottom: 24,
            fontSize: 12,
            color: "rgba(240, 237, 232, 0.25)",
            fontFamily: "monospace",
            letterSpacing: 3,
          }}
        >
          SOULBOUND TOKEN ON BASE
        </p>
      </div>
    ),
    {
      width: 800,
      height: 800,
    }
  );
}
