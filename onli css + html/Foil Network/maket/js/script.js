$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu, .header').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.lists__title').click(function (event) {
		$(this).toggleClass('active-title').next().slideToggle(300);
	});
	$('.menu__lang').click(function (event) {
		$('.sett').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.settings__card-main').on('click', function () {
		$('.settings__card-main').html('Joined'); // либо .text()
	});

	$('.sett__text-blue').click(function (event) {
		$('.settings, .sett').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.settings-button3').click(function (event) {
		$('.settings').toggleClass('active');
	});

	$('.settings__buttons1').click(function (event) {
		$('.settings, .succes').toggleClass('active');
	});

	$('.succes__circle').click(function (event) {
		$('.succes').toggleClass('active');
	});

});

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageXOffset - document.querySelector('header').offsetHeight;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}