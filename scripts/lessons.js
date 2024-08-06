import { lessons } from "../data/content.js";

document.addEventListener('DOMContentLoaded', () => {
  
  let lessonHTML = '';
  lessons.forEach((lesson) => {
    lessonHTML += `
    <div class="lesson">
      <h1>${lesson.number}. ${lesson.topic}</h1>
      <div class="lesson-card-container">`;

      lesson.cards.forEach((card) => {
        for (const key in card) {
          const cardText = card[key];
          lessonHTML += `
          <div class="lesson-card active">
            <div class="text">
              ${cardText}
            </div>
          </div>
        `;
        }
      });

    lessonHTML += `
      </div>
      <div class="card-num-display" id="card-num">1 / ${lesson.cards[0] ? Object.keys(lesson.cards[0]).length : 0}</div>
    </div>
    `;
  });

  document.querySelector('.lessons').innerHTML = lessonHTML;

  let currentCard = 0;
  const cards = document.querySelectorAll('.lesson-card');
  const cardNum = document.getElementById('card-num');

  function updateCardNum() {
    cardNum.textContent = `${currentCard + 1} / ${cards.length}`;
  }

  function showCard(index){
    console.log('Current card index:', currentCard);
    console.log('Requested card index:', index);

    if (cards.length === 0) return;

    cards[currentCard].classList.remove('active');
    cards[currentCard].style.display = 'none';

    currentCard = (index + cards.length) % cards.length;

    cards[currentCard].classList.add('active');
    cards[currentCard].style.display = 'flex';

    updateCardNum();
  }

  function showNextCard() {
    showCard(currentCard + 1);
  }

  function showPrevCard() {
    showCard(currentCard - 1);
  }

  cards.forEach(card => card.style.display = 'none');
  if (cards.length > 0) {
    cards[currentCard].classList.add('active');
    cards[currentCard].style.display = 'flex';
  }

  updateCardNum();

  // Expose functions to global scope for button onclick
  window.showNextCard = showNextCard;
  window.showPrevCard = showPrevCard;
});
