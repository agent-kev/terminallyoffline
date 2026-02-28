import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2D6A4F, #1B998B)",
          borderRadius: 36,
        }}
      >
        {/* Left plug body */}
        <div
          style={{
            width: 44,
            height: 70,
            borderRadius: 12,
            border: "5px solid white",
          }}
        />
        {/* Prongs */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            marginLeft: -2,
          }}
        >
          <div style={{ width: 14, height: 5, background: "white", borderRadius: 2 }} />
          <div style={{ width: 14, height: 5, background: "white", borderRadius: 2 }} />
        </div>
        {/* Gap */}
        <div style={{ width: 10 }} />
        {/* Slots */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            marginRight: -2,
          }}
        >
          <div style={{ width: 14, height: 5, background: "white", borderRadius: 2 }} />
          <div style={{ width: 14, height: 5, background: "white", borderRadius: 2 }} />
        </div>
        {/* Right socket body */}
        <div
          style={{
            width: 44,
            height: 70,
            borderRadius: 12,
            border: "5px solid white",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
