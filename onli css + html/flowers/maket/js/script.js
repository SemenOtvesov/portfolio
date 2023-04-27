$(document).ready(function () {
	$('.header__end-burger').click(function (event) {
		$('.header__end-burger, .header__end-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.menu__title-cross').click(function (event) {
		$('.header__end-burger, .header__end-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.header__list-main').click(function (event) {
		if ($('.header__list-list').hasClass('one')) {
			$('.drop-down__list').not($(this)).removeClass('active-title');
			$('.drop-down__list').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active-title').next().slideToggle(300);
	});
	$('.stocks__sorting-list-text').click(function (event) {
		if ($('.stocks__sorting-box-list').hasClass('one')) {
			$('.drop-down__list').not($(this)).removeClass('active-title');
			$('.drop-down__list').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active-title').next().slideToggle(300);
	});

	$('.stocks__title').click(function (event) {
		if ($('.stocks__box-list').hasClass('one')) {
			$('.stocks__title').not($(this)).removeClass('active');
			$('.stocks__list').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
	$('.stocks__list-item').click(function (event) {
		$(this).toggleClass('active');
	});
	
	$('.product__info-title1').click(function (event) {
		if ($('.product__info').hasClass('one')) {
			$('.product__info-title').not($(this)).removeClass('active');
			$('.product__info-list2, .product__info-list3').slideUp(300);
			$('.product__info-list1').slideToggle(300);
		}
		$(this).toggleClass('active');
	});
	$('.product__info-title2').click(function (event) {
		if ($('.product__info').hasClass('one')) {
			$('.product__info-title').not($(this)).removeClass('active');
			$('.product__info-list1, .product__info-list3').slideUp(300);
			$('.product__info-list2').slideToggle(300);
		}
		$(this).toggleClass('active');
	});
	$('.product__info-title3').click(function (event) {
		if ($('.product__info').hasClass('one')) {
			$('.product__info-title').not($(this)).removeClass('active');
			$('.product__info-list1, .product__info-list2').slideUp(300);
			$('.product__info-list3').slideToggle(300);
		}
		$(this).toggleClass('active');
	});

	$('.header__end-search-category').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
	$('.header__end-item-catalog').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
	$('.list__item').click(function (event) {
		if ($('.list__item').hasClass('one')) {
			$('.list__item').not($(this)).removeClass('active-title');
			$('.list__list').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});


	$('.slider__galery').slick({
		arrows: false,
		dots: true,
		speed: 1500,
		autoplay: true,
		pauseOnDotsHover: true,
		draggable: false,
		waitForAnimate: false,
		variableWidth: true,
		centerMode: true,
	});

	$('.transparentCard__cards-Stocks').slick({
		slidesToShow: 4,
		draggable: false,
		appendArrows: ('.transparentCard__arrows-Stocks'),
		asNavFor: '.link__slider-Stocks',
		responsive:[
			{
				breakpoint: 991.98,
				settings:{
					slidesToShow: 3,
				}
			},{
				breakpoint: 767.98,
				settings:{
				slidesToShow: 2,
				}
			}
		
		]
	});
	$('.link__slider-Stocks').slick({
		arrows: false,
		slidesToShow: 4,
		draggable: false,
		asNavFor: '.transparentCard__cards-Stocks',
		responsive:[
			{
				breakpoint: 991.98,
				settings:{
					slidesToShow: 3,
				}
			},
		{
			breakpoint: 767.98,
			settings:{
			slidesToShow: 2,
			}
		}
		]
	});
	$('.transparentCard__cards-stocks').slick({
		arrows: false,
		slidesToShow: 3,
		draggable: false,
		variableWidth: true,
		responsive:[
		{
			breakpoint: 991.98,
			settings:{
			slidesToShow: 2,
			}
		}
		]
	});


	$('.transparentCard__cards-Seasonal').slick({
		slidesToShow: 4,
		draggable: false,
		appendArrows: ('.transparentCard__arrows-Seasonal'),
		asNavFor: '.link__slider-Seasonal',
		responsive:[
			{
				breakpoint: 991.98,
				settings:{
					slidesToShow: 3,
				}
			},{
				breakpoint: 767.98,
				settings:{
				slidesToShow: 2,
				}
			}
		
		]
	});
	$('.link__slider-Seasonal').slick({
		arrows: false,
		slidesToShow: 4,
		draggable: false,
		asNavFor: '.transparentCard__cards-Seasonal',
		responsive:[
			{
				breakpoint: 991.98,
				settings:{
					slidesToShow: 3,
				}
			},
		{
			breakpoint: 767.98,
			settings:{
			slidesToShow: 2,
			}
		}
		]
	});

	$('.transparentCard__cards-Gifts').slick({
		slidesToShow: 4,
		draggable: false,
		appendArrows: ('.transparentCard__arrows-Gifts'),
		asNavFor: '.link__slider-Gifts',
		responsive:[
			{
				breakpoint: 991.98,
				settings:{
					slidesToShow: 3,
				}
			},{
				breakpoint: 767.98,
				settings:{
				slidesToShow: 2,
				}
			}
		
		]
	});
	$('.link__slider-Gifts').slick({
		arrows: false,
		slidesToShow: 4,
		draggable: false,
		asNavFor: '.transparentCard__cards-Gifts',
		responsive:[
			{
				breakpoint: 991.98,
				settings:{
					slidesToShow: 3,
				}
			},
		{
			breakpoint: 767.98,
			settings:{
			slidesToShow: 2,
			}
		}
		]
	});

	$('.forum__cards').slick({
		arrows: false,
		slidesToShow: 3,
		responsive:[
			{
				breakpoint: 767.98,
				settings:{
					slidesToShow: 1,
					dots: true,
					speed: 1500,
					autoplay: true,
					pauseOnDotsHover: true,
					draggable: false,
					variableWidth: true,
					centerMode: true,
					waitForAnimate: false,
					}
			}
		]
	});
	let screenWidth = window.screen.width
	$('.footer__title').click(function (event) {
		if(screenWidth <= 768 ){
		if ($('.footer__box').hasClass('one')) {
			$('.footer__title').not($(this)).removeClass('active');
			$('.footer__list').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);}
	});


	$('.product__slider-main').slick({
		slidesToShow: 1,
		arrows: false,
		draggable: false,
		variableWidth: true,
		centerMode: true,
		dots: true,
		appendDots: ('.product__slider-arrow'),
		waitForAnimate: false,
	});


	$('.transparentCard__cards-Related').slick({
		slidesToShow: 4,
		draggable: false,
		appendArrows: ('.transparentCard__arrows-Related'),
		responsive:[
			{
				breakpoint: 991.98,
				settings:{
					slidesToShow: 3,
				}
			},{
				breakpoint: 767.98,
				settings:{
				slidesToShow: 2,
				}
			}
		]
	});
	$('.transparentCard__cards-viewed').slick({
		slidesToShow: 4,
		draggable: false,
		appendArrows: ('.transparentCard__arrows-viewed'),
		responsive:[
			{
				breakpoint: 991.98,
				settings:{
					slidesToShow: 3,
				}
			},{
				breakpoint: 767.98,
				settings:{
				slidesToShow: 2,
				}
			}
		]
	});

});
let quantity = 1;
$('.quantity__arrow-left').click(function (event) {
	if(quantity > 1){
	quantity--;
	console.log(quantity);
	var element = document.getElementById("quantity__text");
	element.innerHTML = quantity;
	}
});
$('.quantity__arrow-right').click(function (event) {
	quantity++;
	console.log(quantity);
	var element = document.getElementById("quantity__text");
	element.innerHTML = quantity;
});