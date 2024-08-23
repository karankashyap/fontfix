chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    let urlKey = tab.url;
    if (typeof urlKey === "string" && urlKey.length > 0) {
      chrome.storage.local.get({ [urlKey]: false }, function(result) {
        if (result[urlKey]) {
          chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['content.js']
          });
        }
      });
    }
  }
});
