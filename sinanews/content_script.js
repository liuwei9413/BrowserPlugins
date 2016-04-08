var news = $(".newslist a");
console.log(news.length);	

if ( !news.length ) {
	chrome.runtime.sendMessage({error:"获取新闻信息失败."});
} else {
	var msg = [];
	$.each(news, function(index, item) {
		var data = {};
		data.href = item.href;
		data.text = item.innerHTML;
		msg.push(data);
	})
	chrome.runtime.sendMessage(msg);
}


// if(postInfo.length!=1){
// 	chrome.runtime.sendMessage({type:"sina-index-news", error:"获取新闻信息失败."});
// }
// else{
// 	var msg = {
// 		type: "sina-index-news",
// 		title : $("#cb_post_title_url").text(),
// 		postDate : postInfo.find("#post-date").text(),
// 		author : postInfo.find("a").first().text(),
// 		url: document.URL
// 	};
// 	chrome.runtime.sendMessage(msg);
// }