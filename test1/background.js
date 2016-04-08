/*chrome.tabs.query({active:true}, function(tab) {
	chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response) {
        console.log(response.farewell);
    });
})*/

console.log(1);
$(function() {
	$.post('http://localhost/test.php', {user: 'liuwei'}, function(res) {
		console.log(res);
	})
});

//一次通信
chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {	//发送请求的数据 发送请求的页面 返回信息 
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.greeting == "hello")
            sendResponse({farewell: "goodbye"});
});


//长连接
/*chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "knockknock");
    port.onMessage.addListener(function(msg) {
    	console.log(msg);	//Object {joke: "Knock knock"}  Object {answer: "Madame"}   Object {answer: "Madame... Bovary"}
        if (msg.joke == "Knock knock")
            port.postMessage({question: "Who's there?"});
        else if (msg.answer == "Madame")
            port.postMessage({question: "Madame who?"});
        else if (msg.answer == "Madame... Bovary")
            port.postMessage({question: "I don't get it."});
    });
});*/