async function run() {
  const query = "Sass Belle Ribbed Glass Mushroom Lamp cdn.shopify.com";
  const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
  try {
    console.log(`Searching DuckDuckGo for: ${query}`);
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    const html = await res.text();
    // Extract anything that looks like a URL
    const urlRegex = /(https?:\/\/[^\s"'<>]+)/g;
    let match;
    const urls = [];
    while ((match = urlRegex.exec(html)) !== null) {
      urls.push(match[1]);
    }
    console.log(`Total URLs found: ${urls.length}`);
    for (const u of [...new Set(urls)]) {
      console.log("URL:", decodeURIComponent(u));
    }
  } catch (e) {
    console.error("Error:", e);
  }
}
run();
