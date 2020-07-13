chrome.runtime.onInstalled.addListener(function(){
    chrome.storage.sync.set({color:'blue'},function () 
        {
            console.log("this is a blue color.")
        }
    )

    var rule1={
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        })],
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'en.wikipedia.org'},
          })],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
        chrome.declarativeContent.onPageChanged.addRules([rule1]);
    })

    //add Badge in browser Action
    // chrome.browserAction.setBadgeText({text: 'ok'});
    // chrome.browserAction.setBadgeBackgroundColor({color: 'light blue'});



})

