import { ImageResponse } from "next/og";

export const alt = "Human Rights Experts - Human Rights Expert Witness UK";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          backgroundColor: "#12161C",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 56,
            height: 56,
            border: "1px solid rgba(255,255,255,0.35)",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFFFFF",
            fontSize: 22,
            marginBottom: 28,
          }}
        >
          HR
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 400,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
          }}
        >
          Human Rights Experts
        </div>
        <p
          style={{
            marginTop: 24,
            fontSize: 28,
            fontWeight: 600,
            color: "#8B2942",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Tribunal evidence panel
        </p>
      </div>
    ),
    { ...size },
  );
}
