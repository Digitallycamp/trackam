const navButton = document.querySelector('.nav_right button');

const modal = document.querySelector('.modal');
const closeIcon = document.querySelector('.close');

/**OPen mopdal */
navButton.addEventListener('click', handleModal);
function handleModal() {
	modal.classList.add('open');
	closeIcon.style.cursor = 'pointer';
}

/**Close modal */
closeIcon.addEventListener('click', closeModal);
function closeModal(event) {
	event.stopPropagation();
	modal.classList.remove('open');
}
