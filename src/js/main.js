document.addEventListener('DOMContentLoaded', function() {
	let menu = document.querySelectorAll('.main-menu__item');
	menu.forEach((item) => {
		if (item.querySelector('a').href == window.location.href) {
			item.classList.add('is-active')
		}
	})
})