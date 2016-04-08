/*chrome.tabs.getSelected(null, function(tab) {
  chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });
});*/

console.log($);

//一次通信
//发送信息

chrome.runtime.sendMessage({greeting: "hello"}, function(response) {	//接收返回的信息
	console.log(response);
    // console.log(response.farewell);
});

/*chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
	console.log(222);	

        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.greeting == "hello")
            sendResponse({farewell: "goodbye"});
});
*/

//长连接
//发送信息
/*var port = chrome.runtime.connect({name: "knockknock"});
port.postMessage({joke: "Knock knock"});
port.onMessage.addListener(function(msg) {
	console.log(msg);	//Object {question: "Who's there?"}    Object {question: "Madame who?"}   Object {question: "I don't get it."}
    if (msg.question == "Who's there?")
        port.postMessage({answer: "Madame"});
    else if (msg.question == "Madame who?")
        port.postMessage({answer: "Madame... Bovary"});
});*/

