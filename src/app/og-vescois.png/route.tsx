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
            backgroundColor: "#071B2F",
            padding: "80px 100px",
            fontFamily: "sans-serif",
            color: "#F8FAFC",
            border: "1px solid #1E3A5F",
          }}
        >
          {/* Header Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "#2563EB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              V
            </div>
            <span style={{ fontSize: "32px", fontWeight: "bold", color: "#FFFFFF" }}>
              Vescois
            </span>
          </div>

          {/* Title Area */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "1000px" }}>
            <span
              style={{
                fontSize: "18px",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#22D3EE",
              }}
            >
              {category}
            </span>
            <div
              style={{
                fontSize: "56px",
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
