chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getBerryAmount"){
      sendResponse({status: localStorage['enough_berry']});
      }
});


	
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
    if (changeInfo.status === 'complete') {
    	chrome.tabs.executeScript(tabId, {
    		file: "Berrinator.js"
  		});
    }
});

chrome.webRequest.onCompleted.addListener(function(details) {
	console.log("RAAAAAAAAAAA!")
	chrome.tabs.executeScript(null, {
    	file: "Berrinator.js"
  	});
}, { urls: ["<all_urls>"] });

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(tab, {
	    file: "Berrinator.js"
	});
});

