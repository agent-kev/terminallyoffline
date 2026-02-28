import { ImageResponse } from "next/og";

export const alt = "Terminally Offline — The 30-Day Offline Challenge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 80,
          background: "linear-gradient(145deg, #1C3144 0%, #1A1A1A 40%, #254636 100%)",
          fontFamily: "system-ui",
        }}
      >
        {/* Dot pattern overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.05,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

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
            marginBottom: 40,
          }}
        >
          <span
            style={{ fontSize: 36, fontWeight: 700, color: "white", letterSpacing: -1 }}
          >
            TO
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#F0EDE8",
            lineHeight: 1.1,
            margin: 0,
            marginBottom: 20,
          }}
        >
          Terminally Offline
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 28,
            color: "rgba(240, 237, 232, 0.6)",
            margin: 0,
            lineHeight: 1.4,
            maxWidth: 700,
          }}
        >
          The ultimate luxury in 2026 is being unreachable. Join the 30-Day
          Offline Challenge.
        </p>

        {/* URL */}
        <p
          style={{
            fontSize: 18,
            color: "#1B998B",
            margin: 0,
            marginTop: 40,
            fontFamily: "monospace",
            letterSpacing: 2,
          }}
        >
          terminallyoffline.club
        </p>
      </div>
    ),
    { ...size }
  );
}
