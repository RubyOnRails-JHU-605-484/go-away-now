require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

// Make jQuery available even in the "views" folder
global.$ = require("jquery")

require("jquery-ui")

$(function(){
	// Plain jQuery
	$('#notice').fadeOut(5000);

	const availableCities = [
		"Baltimore", "New York", "Orlando", "Washington D.C.", "Philadelphia",
		"Las Vegas", "Los Angeles", "Denver", "Austin"
	].sort();

	$('body').on('focus', '#city', function(){
		$(this).autocomplete( { source: availableCities } );
	});

	$('body').on('focus', '#arrivalDate', function(){
		$(this).datepicker( { dateFormat: 'yy-mm-dd' } );
	})
});