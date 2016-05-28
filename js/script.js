'use: strict';
$(function() {

	$('.accordion').on('click', function(e) {
		e.preventDefault();
		$accordion = $(this);
		$status = $accordion.children('.accordion__status');

		if ($status.text() == '+') {

			$status
				.css({
					border: 'none',
					'border-right': '1px solid #f6c53d',
				})
				.text('-');

			$accordion.children('.accordion__title').css({border: 'none'});
			$accordion.css({
				'margin-bottom': '150px',
				color: '#fff',
				background: '#f4b60d',
				'font-weight': 100,
				'-webkit-transition': 'all 0.3s linear',
				'-moz-transition': 'all 0.3s linear',
				'transition': 'all 0.3s linear'
			});

			$accordion.children('.accordion__text').slideDown(300);
		}
		else {

			$accordion.children('.accordion__title').css({border: '1px solid #e8e8e8'});

			$accordion.css({
				'margin-bottom': '5px',
				color: '#2a2d32',
				background: '#fff',
				'font-weight': 500,
				'-webkit-transition': 'all 0.3s linear',
				'-moz-transition': 'all 0.3s linear',
				'transition': 'all 0.3s linear'
			});

			$status.css({border: '1px solid #e8e8e8'})
			
			$accordion.children('.accordion__text').slideUp(300, function() {
				$status.text('+');
			});
		}
	});
});
