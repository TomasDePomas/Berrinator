chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {


    if (request.method == "getBerryAmount"){

    	if(localStorage['enough_berry'])
    	{
    		sendResponse({status: localStorage['enough_berry']});		
    	}
    	else
    	{
    		sendResponse({status: 50});
    	}
      
      }
});

	
// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
//     if (changeInfo.status === 'complete') {
//     	chrome.tabs.executeScript(tabId, {
//     		file: "Berrinator.js"
//   		});
//     }
// });

// chrome.webRequest.onCompleted.addListener(function(details) {
// 	console.log("RAAAAAAAAAAA!")
// 	chrome.tabs.executeScript(null, {
//     	file: "Berrinator.js"
//   	});
// }, { urls: ["<all_urls>"] });

// chrome.browserAction.onClicked.addListener(function(tab) {
// 	chrome.tabs.executeScript(tab, {
// 	    file: "Berrinator.js"
// 	});
// });

