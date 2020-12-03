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

// hero video
document.addEventListener('DOMContentLoaded', function() {
	if(window.innerWidth >= 1024) {
		let video = document.querySelector('.hero__video');
		if(video !== null) {
			let webm = document.createElement('source');
			webm.src = '/video/world.webm';
			webm.type =  'video/webm';
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

	burger.addEventListener('click', function() {
		if(!burger.classList.contains('is-active')) {
			burger.classList.add('is-active')
			menu.classList.add('is-active')
		} else {
			burger.classList.remove('is-active')
			menu.classList.remove('is-active')

		}
	})
}

document.addEventListener('DOMContentLoaded', function() {
	mobMenu()
})