let currentSlide = 0;
const carouselTexts = document.querySelectorAll('.carousel-text');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

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

setInterval(showNextText, 4000);

// Initialize the first text as active
carouselTexts[currentSlide].classList.add('active');


