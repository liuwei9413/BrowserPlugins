document.addEventListener('DOMContentLoaded', function() {
	var data = chrome.extension.getBackgroundPage().bgData;

	console.log(data);
	var html = '';
	$.each(data, function(index, item) {
		var li = '<li><a href="'+ item.href +'">'+ item.text +'</a></li>';
		html += li;
	});

	$('#content .news').html(html);
});