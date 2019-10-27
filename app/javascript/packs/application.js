require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

require("jquery")

$(function(){
	// Plain jQuery
	$('#notice').fadeOut(5000);
});
