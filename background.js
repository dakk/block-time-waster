const filter = {
  urls: [
    // Twitter 'for you' section
    "https://x.com/i/api/graphql/*/HomeTimeline*"
  ]
};

browser.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (details.url.includes("track") || details.type === "xmlhttprequest") {
      console.log("Blocked API:", details.url);
      return { cancel: true };
    }
  },
  filter,
  ["blocking"]
);
