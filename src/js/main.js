// modal window demo at submit
let forms = document.querySelectorAll('.form');
forms.forEach((form) => {
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		if (form.checkValidity() === false) {

		}
		form.classList.add('was-validated');
		$('#registration-success').modal('show')
	})
})



// active menu item
document.addEventListener('DOMContentLoaded', function() {
	let menuItems = document.querySelectorAll('.main-menu__item');
	menuItems.forEach((item) => {
		if (item.querySelector('a').href == window.location.href) {
			item.classList.add('is-active')
		}
	})
})

