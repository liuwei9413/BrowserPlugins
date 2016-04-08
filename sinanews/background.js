var bgData;
chrome.runtime.onMessage.addListener(function(request, sender, sendRequest){
	// console.log(request);
	if ( !!request.length ) {
		$.ajax({
			url: "http://i.getdata.com/savedata",
			cache: false,
			type: "POST",
			data: {news: request},
		}).done(function(msg) {
			console.log(msg);
			bgData = JSON.parse(msg);
		}).fail(function() {
			alert('失败');
		})
	}
});

/*var articleData = {};
articleData.error = "加载中...";
chrome.runtime.onMessage.addListener(function(request, sender, sendRequest){
	console.log(request); return;

	if(request.type!=="cnblog-article-information")
		return;
	articleData = request;
	articleData.firstAccess = "获取中...";
	if(!articleData.error){
		$.ajax({
			url: "http://localhost/sinanews.php",
			cache: false,
			type: "POST",
			data: {url:articleData.url},
			dataType: "json"
		}).done(function(msg) {	//msg = Object {firstAccess: "2016-04-06 13:33"}
			if(msg.error){
				articleData.firstAccess = msg.error;
			} else {
				articleData.firstAccess = msg.firstAccess;
			}
		}).fail(function(jqXHR, textStatus) {
			articleData.firstAccess = textStatus;
		});
	}
});*/