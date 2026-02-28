import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 6,
          padding: 3,
        }}
      >
        {/* Left plug */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 3,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              border: "2px solid white",
            }}
          />
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              border: "2px solid white",
            }}
          />
        </div>
        {/* Prongs */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 7,
            margin: "0 1px",
          }}
        >
          <div style={{ width: 3, height: 2, background: "white", borderRadius: 1 }} />
          <div style={{ width: 3, height: 2, background: "white", borderRadius: 1 }} />
        </div>
        {/* Gap */}
        <div style={{ width: 2 }} />
        {/* Slots */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 7,
            margin: "0 1px",
          }}
        >
          <div style={{ width: 3, height: 2, background: "white", borderRadius: 1 }} />
          <div style={{ width: 3, height: 2, background: "white", borderRadius: 1 }} />
        </div>
        {/* Right socket */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 3,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              border: "2px solid white",
            }}
          />
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              border: "2px solid white",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
