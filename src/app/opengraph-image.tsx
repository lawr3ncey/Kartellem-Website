import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "KARTELLEM — Manila Underground Collective";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle red accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#E31C25",
          }}
        />
        {/* Logo placeholder text (Bebas-style) */}
        <div
          style={{
            fontSize: 140,
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "-2px",
            lineHeight: 1,
            textAlign: "center",
          }}
        >
          KARTELLEM
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#888888",
            letterSpacing: "8px",
            marginTop: 24,
            textTransform: "uppercase",
          }}
        >
          MANILA UNDERGROUND COLLECTIVE
        </div>
        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 24,
            right: 40,
            fontSize: 18,
            color: "#444444",
            letterSpacing: "3px",
          }}
        >
          kartellem.devrence.com
        </div>
      </div>
    ),
    { ...size }
  );
}
