// Function for Navigation sidebar
var hamburger = document.querySelector ('.hamburger');
var nav = document.querySelector ('.menu');
hamburger.addEventListener ('click',showNav);

function showNav() {
  nav.classList.toggle('show');  
  hamburger.classList.toggle('open');
  document.querySelector('html').classList.toggle('no-scroll');
}

// Function for video modal
var modal = document.querySelector('.lightbox-opened');
var videoThumbnail = document.querySelectorAll('.video figure');
var thumbnailArray = Array.from(videoThumbnail);

thumbnailArray.forEach(function(element) {
	element.addEventListener('click',openModal);
});

modal.addEventListener('click',closeModal);
document.querySelector('body').addEventListener('keyup',closeOnEsc);

// Function to open modal
function openModal(e) {
	e.preventDefault();
	var currentVideo = this.nextElementSibling.src;
	modal.children[0].src = currentVideo ;
	modal.classList.add("activeVideo");
	document.querySelector('html').classList.add('no-scroll');
};

// Function to close modal
function closeModal(e) {
	e.preventDefault();
	var playedVideo = document.querySelector('.lightbox-opened .currentVideo');
	if(e.target != playedVideo) {
		modal.classList.remove("activeVideo");
		document.querySelector('html').classList.remove('no-scroll');
	}
};

// Function to close modal on esc button
function closeOnEsc(e) {
	e.preventDefault();
	if(e.which == 27) {
		modal.classList.remove("activeVideo");
		document.querySelector('html').classList.remove('no-scroll');
	}
};

// Function for banner slider
$(document).ready (function() {
  $('.slider').slick ({
  slidesToShow: 1,
  dots: true,
  arrows: false,
  });
});