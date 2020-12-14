// modal window demo at submit
let forms = document.querySelectorAll('.form');
forms.forEach((form) => {
	form.addEventListener('submit', (e) => {
		let invalids = form.querySelectorAll('input:invalid'),
			feedback = form.querySelector('.invalid-feedback');

		e.preventDefault();
		form.classList.add('was-validated');
		feedback.innerHTML = '';
		
		if (!form.checkValidity()) {
			//form invalid
			invalids.forEach((invalid) => {
				let label = invalid.labels[0].innerText;
				let span = document.createElement('span');
				span.append('Enter ' + label + '.');
				feedback.classList.remove('sr-only');
				feedback.append(span);
			})
		} else {
			//form is valid
			feedback.classList.add('sr-only');

			//only for signup form
			if (form.classList.contains('form--signup')) {
				$('#registration-success').modal('show');
			} else {
				alert('Form submitted');
			}

		}
	})
})

// active menu item
document.addEventListener('DOMContentLoaded', function () {
	let menuItems = document.querySelectorAll('.main-menu__item');
	menuItems.forEach((item) => {
		if (item.querySelector('a').href == window.location.href) {
			item.classList.add('is-active');
		}
	})
})

// hero video
document.addEventListener('DOMContentLoaded', function () {
	if (window.innerWidth >= 1024) {
		let video = document.querySelector('.hero__video');
		if (video !== null) {
			let webm = document.createElement('source');
			webm.src = '/video/world.webm';
			webm.type = 'video/webm';
			video.append(webm);
			let mp4 = document.createElement('source');
			mp4.src = '/video/world2.mp4';
			mp4.type = 'video/mp4';
			video.append(mp4);
		}
	}
})

// mobile menu
function mobMenu() {
	let burger = document.querySelector('.header__burger'),
		menu = document.querySelector('.header__menu');

	burger.addEventListener('click', function () {
		if (!burger.classList.contains('is-active')) {
			burger.classList.add('is-active');
			menu.classList.add('is-active');
		} else {
			burger.classList.remove('is-active');
			menu.classList.remove('is-active');
		}
	})
}

document.addEventListener('DOMContentLoaded', function () {
	mobMenu();
})