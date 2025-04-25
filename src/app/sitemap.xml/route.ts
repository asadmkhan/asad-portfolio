import { NextResponse } from "next/server";

export async function GET() {
  const locales = ["en", "de", "es", "fr", "it", "ar"];
  const baseUrl = "https://www.codedbyasad.com";

  // Define the static routes relative to each locale
  const paths = [
    "", // homepage per locale
    // '/about', '/projects', etc. — you can add more here later
  ];

  const urls = locales.flatMap((locale) =>
    paths.map((path) => {
      const loc = `${baseUrl}/${locale}${path}`;
      return `
        <url>
          <loc>${loc}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>1.0</priority>
        </url>
      `;
    })
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
