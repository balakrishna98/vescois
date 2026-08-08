import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vescois Healthcare Intelligence",
    short_name: "Vescois",
    description:
      "Vescois helps healthcare organizations improve coding quality, revenue performance, operational efficiency, and compliance.",
    start_url: "/",
    display: "standalone",
    background_color: "#071B2F",
    theme_color: "#071B2F",
    icons: [
      {
        src: "/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
