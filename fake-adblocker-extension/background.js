chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    // Simulate malicious behavior by logging URLs to the console (instead of sending to a server)
    console.log('Visited URL:', details.url);
  },
  { urls: ["<all_urls>"] },
  ["requestBody"]
);