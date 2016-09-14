define(function(require) {
	var $ = require('../js_modules/jquery');
	// 通过 require 引入依赖
	var group = require('../js_modules/groupSlider');

	$(document).ready(function() {
		//调用滑动
        group.groupSlider('bannerSlider',600,600);
        
		$('#clickBtn').click(function() {
			console.log($(this));
		});
	});


});