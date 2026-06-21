async function run() {
  const query = "Sass Belle Ribbed Glass Mushroom Lamp";
  const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
  try {
    console.log("Searching DuckDuckGo for Sass & Belle lamp...");
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    const html = await res.text();
    // Look for links inside <a> tags
    const regex = /href="([^"]+)"/gi;
    let match;
    const links = [];
    while ((match = regex.exec(html)) !== null) {
      links.push(match[1]);
    }
    console.log(`Found ${links.length} total links:`);
    for (const link of [...new Set(links)].slice(0, 50)) {
      if (link.includes("uddg=")) {
        const actualUrl = decodeURIComponent(link.split("uddg=")[1].split("&")[0]);
        console.log("DDG Result:", actualUrl);
      }
    }
  } catch (e) {
    console.error("Error:", e);
  }
}
run();
