define(function(require, exports){
	var $ = require('../js_modules/jquery');

	require('../js_modules/jquery.iosslider.min');

	function groupSlider(box,wh,hh) {
		var wrap = $('.'+box),
			iWidth = document.documentElement.clientWidth,
			iHeight = parseInt(iWidth * hh / wh);
        console.log(wrap);
		wrap.height(iHeight + "px");
		wrap.children(".slider").height(iHeight).find("img").height(iHeight);

		var picLen = $('.slider .pic-list').length;
		var str = "";
		for (var i = 0; i < picLen; i++) {
			if (i < 1) {
				str += "<div class='btn selected'></div>"
			} else {
				str += "<div class='btn'></div>"
			}
		}
		$('.clickArea').append(str).css("margin-left", -$('.clickArea').width() / 2);

		wrap.iosSlider({
			snapToChildren: true,
			desktopClickDrag: true,
			infiniteSlider: true,
			startAtSlide: '1',
			navSlideSelector: wrap.find('.btn'),
			onSlideChange: function(args) {
				$(args.sliderObject).parent()
					.find('.clickArea .btn:eq(' + (args.currentSlideNumber - 1) + ')')
					.addClass('selected')
					.siblings()
					.removeClass('selected');
			},
			autoSlide: false,
			autoSlideTimer: 2000,
		});
	}
	exports.groupSlider = groupSlider;
})