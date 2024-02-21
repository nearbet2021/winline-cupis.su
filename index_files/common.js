(function ($) {
	$(document).ready(function () {

		// if($(window).innerWidth() < 700) {
		// 	$('.header .menu').hide();
		// }

		$(document).on('click', '.burger', function() {
			if (!$(this).hasClass('active')) {
				$(this).addClass('active');
				$('.header .menu').slideDown().addClass('active');
				$('.header').addClass('active');
			} else {
				$(this).removeClass('active');
				$('.header .menu').slideUp().removeClass('active');
				$('.header').removeClass('active');
			}
		});

		// $(document).on('click', '.anchor', function (e) {
		// 	var fixed_offset = 0;
		// 	$('html, body').stop().animate({
		// 		scrollTop: $(this.hash).offset().top - fixed_offset
		// 	}, 500);
		// 	e.preventDefault();
		// });

		$('.spoiler-list').hide();
		$(document).on('click', '.spoiler__title', function (e) {
			$(this).toggleClass('active');
			$(this).next('.spoiler__text').slideToggle();
		});

		$(document).ready(function ($) {
			$('.code__btn').click(function () {
				var copyText = $(this).parent().find('.code__num').text();
				var copytext2 = document.createElement('input');
				copytext2.value = copyText;
				document.body.appendChild(copytext2);
				copytext2.select();
				document.execCommand("copy");
				document.body.removeChild(copytext2);
				alert('Текст скопирован');
			});
		});
	});
})(jQuery);