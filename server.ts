import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Enable JSON request bodies
  app.use(express.json());

  // API Route to dynamically get the RuStore app version for com.heed.periodility
  app.get("/api/rustore-version", async (req, res) => {
    try {
      console.log("Fetching version from RuStore...");
      const response = await fetch("https://www.rustore.ru/catalog/app/com.heed.periodility", {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
          "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
          "Cache-Control": "no-cache"
        },
        signal: AbortSignal.timeout(6000) // 6 second timeout
      });

      if (!response.ok) {
        throw new Error(`RuStore responded with status: ${response.status}`);
      }

      const html = await response.text();
      
      // 1. Try finding version in ld+json structured data (softwareVersion)
      const softwareVersionMatch = html.match(/"softwareVersion"\s*:\s*"([^"]+)"/i);
      if (softwareVersionMatch && softwareVersionMatch[1]) {
        const ver = softwareVersionMatch[1].trim();
        if (/^[\d\.]+$/.test(ver)) {
          console.log(`Found version via softwareVersion: ${ver}`);
          return res.json({ version: ver, source: "rustore_ld_json" });
        }
      }

      // 2. Try Next.js dehydrated state page properties ("versionName" or "version")
      const versionNameMatch = html.match(/"versionName"\s*:\s*"([^"]+)"/i);
      if (versionNameMatch && versionNameMatch[1]) {
        const ver = versionNameMatch[1].trim();
        if (/^[\d\.]+$/.test(ver)) {
          console.log(`Found version via versionName: ${ver}`);
          return res.json({ version: ver, source: "rustore_next_state" });
        }
      }

      // 3. Look for "Версия" with common layout classes
      const textMatches = [
        /Версия\s*<[^>]+>\s*([\d\.]+)/i,
        /Версия\s*:\s*([\d\.]+)/i,
        />\s*Версия\s*<[\s\S]*?>\s*([\d\.]+)\s*</i,
        />\s*Версия\s*[\s\S]*?([\d\.]+)\s*</i
      ];

      for (const regex of textMatches) {
        const match = html.match(regex);
        if (match && match[1]) {
          const ver = match[1].trim();
          if (/^[\d\.]+$/.test(ver)) {
            console.log(`Found version via regex text match: ${ver}`);
            return res.json({ version: ver, source: "rustore_regex" });
          }
        }
      }

      // 4. Fallback search near "версия" keyword
      const idx = html.toLowerCase().indexOf("версия");
      if (idx !== -1) {
        const sub = html.substring(idx, idx + 350);
        const m = sub.match(/([\d\.]+)/);
        if (m && m[1] && m[1].includes('.') && m[1].length >= 3) {
          const ver = m[1].trim();
          console.log(`Found version via keyword neighborhood: ${ver}`);
          return res.json({ version: ver, source: "rustore_neighborhood" });
        }
      }

      console.warn("Could not parse version from RuStore HTML, using standard fallback.");
      return res.json({ version: "4.8.1", source: "fallback_parsed_failed" });

    } catch (error: any) {
      console.error("Error fetching RuStore version:", error.message || error);
      // Clean fallback so UI always loads gracefully
      return res.json({ version: "4.8.1", source: "fallback_error" });
    }
  });

  // Serve Vite assets in development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve production static assets
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
