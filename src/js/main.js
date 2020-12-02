let forms = document.querySelectorAll('.form');
forms.forEach((form) => {
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		alert('submit success')
	})
})
document.addEventListener('DOMContentLoaded', function() {
	let menuItems = document.querySelectorAll('.main-menu__item');
	menuItems.forEach((item) => {
		if (item.querySelector('a').href == window.location.href) {
			item.classList.add('is-active')
		}
	})
})