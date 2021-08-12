"use strict";
// for blacklisting the urls.
chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.get(["blocked", "enabled"], function (local) {
    if (!Array.isArray(local.blocked)) {
      chrome.storage.local.set({ blocked: [] });
    }

    if (typeof local.enabled !== "boolean") {
      chrome.storage.local.set({ enabled: false });
    }
  });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
  const url = changeInfo.pendingUrl || changeInfo.url;
  if (!url || !url.startsWith("http")) {
    return;
  }

  const hostname = new URL(url).hostname;

  chrome.storage.local.get(["blocked", "enabled"], function (local) {
    const { blocked, enabled } = local;
    if (
      Array.isArray(blocked) &&
      enabled &&
      blocked.find((domain) => hostname.includes(domain))
    ) {
      chrome.tabs.remove(tabId);
    }
  });
});

//   ------------------alarm---------------------
chrome.alarms.onAlarm.addListener(function (alarm) {
  new Audio("JUST DO IT.mp3").play();
  if (alarm.name == "remind") {
    alert("ALARM NOTIFICATION");
    var entries = localStorage.getItem("entries");
    if (entries) {
      entries.push(entries[0]);
    }
  }
});
