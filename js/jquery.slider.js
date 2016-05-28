'use strict';
$(function() {
	$('.slider__btn').on('click', function() {
		$('.slider__btn').removeClass('slider__btn--active');
		$(this).addClass('slider__btn--active');
		$('.slider').css({'background-position': $(this).data('position') + ' 0'});
	});
})
