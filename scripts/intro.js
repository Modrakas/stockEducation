let currentIndex = 0;
const carouselTexts = document.querySelectorAll('.carousel-text');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showText(index) {
    carouselTexts[currentIndex].classList.remove('active');
    currentIndex = (index + carouselTexts.length) % carouselTexts.length;
    carouselTexts[currentIndex].classList.add('active');
}

function showNextText() {
    showText(currentIndex + 1);
}

function showPrevText() {
    showText(currentIndex - 1);
}

nextButton.addEventListener('click', showNextText);
prevButton.addEventListener('click', showPrevText);

setInterval(showNextText, 6500);

// Initialize the first text as active
carouselTexts[currentIndex].classList.add('active');

// document.getElementById('ready-btn').addEventListener('click', function() {
//     window.location.href = 'main.html'; 
// });