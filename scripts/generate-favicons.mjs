import sharp from "sharp";
import fs from "fs";
import path from "path";

const svgPath = path.resolve("public/favicon.svg");
const svgBuffer = fs.readFileSync(svgPath);

const sizes = [
  { name: "public/favicon-48x48.png", size: 48 },
  { name: "public/favicon-96x96.png", size: 96 },
  { name: "public/favicon-192x192.png", size: 192 },
  { name: "public/favicon-512x512.png", size: 512 },
  { name: "public/apple-touch-icon.png", size: 180 },
  { name: "src/app/icon.png", size: 512 },
  { name: "src/app/apple-icon.png", size: 180 },
];

async function generateFavicons() {
  for (const { name, size } of sizes) {
    const outputPath = path.resolve(name);
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(outputPath);
    console.log(`Generated ${name} (${size}x${size})`);
  }

  // Generate multi-size favicon.ico
  const icoBuffer = await sharp(svgBuffer)
    .resize(48, 48)
    .png()
    .toBuffer();
  
  fs.writeFileSync(path.resolve("public/favicon.ico"), icoBuffer);
  fs.writeFileSync(path.resolve("src/app/favicon.ico"), icoBuffer);
  console.log("Updated favicon.ico files");
}

generateFavicons().catch(console.error);
