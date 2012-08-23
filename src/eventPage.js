// Copyright 2012, <Georg Nordhausen, onionblossom (at) gmail (dot) com>: License details can be found in LICENSE.markdown.

chrome.runtime.onInstalled.addEventListener(function () {
  // Do any one-time setup here. This listener will be triggered once upon
  // extension installation, and once each time the extension is upgraded to a
  // newer version.

  chrome.storage.local.set("INSTALLED", true);
});

// The rest of this script should contain the inner workings of your extension.
// If you were interested in doing something when the user activates a tab, for
// instance, you might include code like the following:

chrome.tabs.onActivated.addListener(function (activeTab) {
  // Do something amazing with Tab ID `activeTab.tabId`!
  chrome.tabs.get(activeTab.tabId, function (details) {
    alert("Tab ID #" + details.id + " is displaying " + details.url + "! Wow!");
  });
});
