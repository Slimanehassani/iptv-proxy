export default {
  async fetch(request) {
    let url = new URL(request.url);
    let targetUrl = url.searchParams.get("url");

    if (!targetUrl) {
      return new Response("Missing URL", { status: 400 });
    }

    let modifiedHeaders = new Headers();
    modifiedHeaders.set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64)");
    modifiedHeaders.set("Referer", "https://iptv-org.github.io/");
    modifiedHeaders.set("Origin", "https://iptv-org.github.io");

    let response = await fetch(targetUrl, {
      method: "GET",
      headers: modifiedHeaders
    });

    return response;
  }
};
