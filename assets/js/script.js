var hamburger = document.querySelector ('.hamburger');
var nav = document.querySelector ('.menu');
hamburger.addEventListener ('click',navShow);

// Function for Navigation sidebar
function navShow() {
  nav.classList.toggle('show');  
  hamburger.classList.toggle('open');
  document.querySelector('html').classList.toggle('no-scroll');
}

// Function for banner slider
$(document).ready (function() {
  $('.slider').slick ({
  slidesToShow: 1,
  dots: true,
  arrows: false,
  });
});





















