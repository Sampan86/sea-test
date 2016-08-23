define(function(require) {

    // 通过 require 引入依赖
    var $ = require('../js_modules/jquery');

    $('#clickBtn').click(function(){
    	console.log($(this));
    });
});
