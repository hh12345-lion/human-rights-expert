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
          backgroundColor: "#FAFAF9",
          padding: 72,
          borderBottom: "12px solid #C2410C",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#1C1917",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          Human Rights Experts
        </div>
        <p
          style={{
            marginTop: 20,
            fontSize: 22,
            fontWeight: 600,
            color: "#C2410C",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Expert evidence · UK tribunals
        </p>
      </div>
    ),
    { ...size },
  );
}
