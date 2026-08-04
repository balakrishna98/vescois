import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "Healthcare Intelligence. Delivered.";
    const category = searchParams.get("category") || "Healthcare Operations & Technology";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            backgroundColor: "#0B2A3F",
            padding: "80px 100px",
            fontFamily: "sans-serif",
            color: "#F8FAFC",
            border: "1px solid #102A43",
          }}
        >
          {/* Header Brand with V Gradient Mark */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <svg
              width="64"
              height="64"
              viewBox="0 0 100 100"
              fill="none"
            >
              <defs>
                <linearGradient id="vOgLeftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00C6FF" />
                  <stop offset="100%" stopColor="#0066FF" />
                </linearGradient>

                <linearGradient id="vOgRightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00F2FE" />
                  <stop offset="60%" stopColor="#00C853" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>

                <linearGradient id="vOgFullGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00B2FE" />
                  <stop offset="45%" stopColor="#0066FF" />
                  <stop offset="75%" stopColor="#00C853" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>

              <g>
                <path d="M 22 18 L 50 82 L 57 82 L 30 18 Z" fill="url(#vOgLeftGrad)" />
                <path d="M 33 18 L 50 68 L 67 18 L 75 18 L 50 78 L 25 18 Z" fill="url(#vOgFullGrad)" />
                <path d="M 70 18 L 50 82 L 57 82 L 78 18 Z" fill="url(#vOgRightGrad)" />
              </g>
            </svg>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "36px", fontWeight: "bold", color: "#FFFFFF" }}>
                Vescois
              </span>
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#94A3B8", letterSpacing: "0.08em" }}>
                HEALTHCARE INTELLIGENCE
              </span>
            </div>
          </div>

          {/* Title Area */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "1000px" }}>
            <span
              style={{
                fontSize: "18px",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#00F2FE",
              }}
            >
              {category}
            </span>
            <div
              style={{
                fontSize: "54px",
                fontWeight: "bold",
                lineHeight: 1.15,
                color: "#FFFFFF",
              }}
            >
              {title}
            </div>
          </div>

          {/* Footer Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              borderTop: "1px solid #1E3A5F",
              paddingTop: "24px",
              fontSize: "18px",
              color: "#94A3B8",
            }}
          >
            <span>vescois.com</span>
            <span>Healthcare Intelligence. Delivered.</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch {
    return new Response("Failed to generate OpenGraph image", { status: 500 });
  }
}
