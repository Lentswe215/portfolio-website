window.sr = ScrollReveal();
sr.reveal('.anim');

const menuBtn = document.querySelector('.menu-bars');
const menu = document.querySelector('.menu');
const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-item');
let showMenu = false;

menuBtn.addEventListener('click', (e) => {

	if (!showMenu) {
		menuBtn.classList.add('close');
		menu.classList.add('show');
		navList.classList.add('show');
		navItems.forEach((item) => {
			item.classList.add('show');
		});

		showMenu = true;
	} else {
		menuBtn.classList.remove('close');
		menu.classList.remove('show');
		navList.classList.remove('show');
		navItems.forEach((item) => {
			item.classList.remove('show');
		});

		showMenu = false;
	}
});
