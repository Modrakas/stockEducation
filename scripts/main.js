import { lessons } from "../data/lessons.js";


let lessonHTML = '';
lessons.forEach((lesson) => {
  lessonHTML += `
  <div class="lesson">
    <h1>${lesson.number}. ${lesson.topic}</h1>
    <div class="lesson-card-container">`;

    lesson.cards.forEach((card) => {
// Since card is an object/array iteself, a loop is needed to loop over its keys/indices to get the text
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
//Generates the card-num-display
  lessonHTML += `
    </div>
    <div class="card-num-display" id="card-num">1 / ${lesson.cards[0] ? Object.keys(lesson.cards[0]).length : 0}</div>

  </div>
  `;
});

//Need to make both HTMLs equal in order for lessonHTML to be displayed
document.querySelector('.lessons').innerHTML = lessonHTML;

let currentCard = 0;
const cards = document.querySelectorAll('.lesson-card');
const cardNum = document.getElementById('card-num');

//Updtaes the card-num-display to show current card out of total cards
function updateCardNum() {
  cardNum.textContent = `${currentCard + 1} / ${cards.length}`;
}

//Function to show one card at a time
function showCard(index){
  cards[currentCard].classList.remove('active');
//Hide current card
  cards[currentCard].style.display = 'none';

  currentCard = (index + cards.length) % cards.length;
  
  cards[currentCard].classList.add('active');
//Show next card
  cards[currentCard].style.display = 'flex';

  //Need to call this function to update the card-num-display the current card
  updateCardNum();
}

//Function to show the next card
function showNextCard() {
    showCard(currentCard + 1);
}

//Function to show the previous card
function showPrevCard() {
    showCard(currentCard - 1);
}

//Initialize the first card as active and display it while hiding all other cards
cards.forEach(card => card.style.display ='none');
cards[currentCard].classList.add('active');
cards[currentCard].style.display = 'flex';

////Need to call this function to update the card-num-display after the current card is changed
updateCardNum();
