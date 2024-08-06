const lessons = [
  {
    number: '1',
    topic: 'What is the stock market?',
    cards: [
      {
        1: "When you hear people talking about 'the market' in regards to finance, they're typically referring to the stock market.",
        2: "The stock market is where people buy and sell shares of companies leading to a variety of risk and reward.",
        3: "You might hear people on the news say, '... shares were up(or down)...' describing how the market did (or is doing) in a given time period.",
        4: "Basically, the stock market is where you can buy tiny pieces of a company to invest your money. how well your investment does depends on how well the company does.",
        5: "The value of a company will rise and fall due to compnay or economic news.",
        6: "Bonds are kind of like an IOU and usually have a set payback date - which is considered to be a safer investment.",
        7: "There are also exchange traded funds (ETFs), derivatives, currencies, and other offerings, which we will learn about in later lessons.",
        8: "The stock market is where buyers (BULLS) and sellers (BEARS) come together to invest. You may hear the terms 'bullish' or 'bearish' market, which describes the direction the market is heading in regards to how much people are buying and/or selling stocks.",
        9: "The SPREAD is the difference between the buying and selling price of a stock.",
        10: "Think of a used car dealer making a profit on the price they quote you to buy your car (part-exchange) and the price they charge the new owner when they sell your old car.",
        11: "When referring to a stock, this can be described as the 'BID' and 'ASK' SPREAD.",
        12: "The BID is how much youre willing to pay for a stock for.",
        13: "The ASK is how much the stock holder is willing to sell the stock for.",
        14: "the difference between the BID and the ASK is the SPREAD.",
        15: "Who's organizing this sale? The BROKER and they get paid off the SPREAD. The SPREAD can also contain several other fees or costs.",
        16: "Supply and demand also determine the spread. If you have a lot of sellers the SPREAD can widen (high supply and low demand).",
        17: "If there are a lot of buyers, the SPREAD can be low (low supply and high demand). This is why the SPREAD is always changing.",
        18: "What affects the SPREAD? Availability equals how easily the SHARES of a company can be traded. VOLUME equals if the amount of shares available is changing hands quickly. Popularity equals high priced shares can have a larger SPREAD. Market volatility equals Good or bad news whether is about the company or the economy.",
        19: "If you're day trading, the BID and ASK SPREAD is very important because the difference can have a big impact on your daily profits/gains.",
      }
    ],
  }
];

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
