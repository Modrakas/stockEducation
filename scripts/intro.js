let currentSlide = 0;
const carouselTexts = document.querySelectorAll('.carousel-text');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showText(slide) {
    carouselTexts[currentSlide].classList.remove('active');
    currentSlide = (slide + carouselTexts.length) % carouselTexts.length;
    carouselTexts[currentSlide].classList.add('active');
}

function showNextText() {
    showText(currentSlide + 1);
}

function showPrevText() {
    showText(currentSlide - 1);
}

nextButton.addEventListener('click', showNextText);
prevButton.addEventListener('click', showPrevText);

setInterval(showNextText, 6500);

// Initialize the first text as active
carouselTexts[currentSlide].classList.add('active');

// document.getElementById('ready-btn').addEventListener('click', function() {
//     window.location.href = 'main.html'; 
// });