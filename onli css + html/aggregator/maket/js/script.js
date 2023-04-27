$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu, .header').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.courses__main-box-click').click(function (event) {
		$('.courses__filter-box, .wrapper').toggleClass('active');
	});
	$('.courses__end-title-cross').click(function (event) {
		$('.courses__filter-box, .wrapper').toggleClass('active');
	});

	$('.directions__item-text').click(function (event) {
		if ($('.directions__item').hasClass('one')) {
			$('.directions__item-text').removeClass('active');
			$('.directions__list').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300).css("display", "flex");
	});
	

	$('.popular__link-1').click(function (event) {
		if ($('.popular__links').hasClass('one')) {
			$('.popular__list').not($('.popular__list-1')).slideUp(300);
		}
		$(this).toggleClass('active');
		$('.popular__link').not($(this)).removeClass('active');
		$('.popular__list-1').slideToggle(300);
	});
	$('.popular__link-2').click(function (event) {
		if ($('.popular__links').hasClass('one')) {
			$('.popular__list').not($('.popular__list-2')).slideUp(300);
		}
		$(this).toggleClass('active');
		$('.popular__link').not($(this)).removeClass('active');
		$('.popular__list-2').slideToggle(300);
	});
	$('.popular__link-3').click(function (event) {
		if ($('.popular__links').hasClass('one')) {
			$('.popular__list').not($('.popular__list-3')).slideUp(300);
		}
		$(this).toggleClass('active');
		$('.popular__link').not($(this)).removeClass('active');
		$('.popular__list-3').slideToggle(300);
	});
	$('.popular__link-4').click(function (event) {
		if ($('.popular__links').hasClass('one')) {
			$('.popular__list').not($('.popular__list-4')).slideUp(300);
		}
		$(this).toggleClass('active');
		$('.popular__link').not($(this)).removeClass('active');
		$('.popular__list-4').slideToggle(300);
	});
	$('.popular__link-5').click(function (event) {
		if ($('.popular__links').hasClass('one')) {
			$('.popular__list').not($('.popular__list-5')).slideUp(300);
		}
		$(this).toggleClass('active');
		$('.popular__link').not($(this)).removeClass('active');
		$('.popular__list-5').slideToggle(300);
	});
	$('.popular__link-6').click(function (event) {
		if ($('.popular__links').hasClass('one')) {
			$('.popular__list').not($('.popular__list-6')).slideUp(300);
		}
		$(this).toggleClass('active');
		$('.popular__link').not($(this)).removeClass('active');
		$('.popular__list-6').slideToggle(300);
	});
	$('.popular__link-7').click(function (event) {
		if ($('.popular__links').hasClass('one')) {
			$('.popular__list').not($('.popular__list-7')).slideUp(300);
		}
		$(this).toggleClass('active');
		$('.popular__link').not($(this)).removeClass('active');
		$('.popular__list-7').slideToggle(300);
	});
	$('.popular__link-8').click(function (event) {
		if ($('.popular__links').hasClass('one')) {
			$('.popular__list').not($('.popular__list-8')).slideUp(300);
		}
		$(this).toggleClass('active');
		$('.popular__link').not($(this)).removeClass('active');
		$('.popular__list-8').slideToggle(300);
	});

	$('.popular__button').click(function (event) {
		$('.popular__list-additionally').slideToggle(300);
		$(this).toggleClass('active');
	});

	if($(window).width() < 768){
		$('.footer__list-title').click(function (event) {
			if ($('.footer__list-box').hasClass('one')) {
				$('.footer__list-title').not($(this)).removeClass('active');
				$('.footer__list').not($(this).next()).slideUp(300);
			}
			$(this).toggleClass('active').next().slideToggle(300);
		});
	}

	$('.school__slider').slick({
		dots: true,
		slidesToShow:4,
		slidesToScroll:2,
		infinite: true,
		responsive:[
			{
				breakpoint: 769,
				settings:{
					slidesToShow:2,
				}
			},
			{
				breakpoint: 426,
				settings:{
					slidesToShow:1,
					slidesToScroll:1,
				}
			},
			
		]
		
	})
});
