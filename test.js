$(function() {
				$(window).scroll(function() {
					if ($(this).scrollTop() > 50) {
						$('header').addClass('change-color')
					}
					if ($(this).scrollTop() < 50) {
						$('header').removeClass('change-color')
					}
				});
			}) ;