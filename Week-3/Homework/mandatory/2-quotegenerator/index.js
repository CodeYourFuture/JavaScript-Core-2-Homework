const colours = [
  '#ff7a5a',
  '#765aa6',
  '#fee7bc',
  '#ffc64a',
  '#b460a6',
  '#ffffff',
  '#4781c1',
];

const blockQuote = document.querySelector('.blockquote');
const quote = document.querySelector('.blockquote p');
const author = document.querySelector('.blockquote-footer');
const newQuoteBtn = document.querySelector('.btn');
const switchToggle = document.getElementById('autoPlay');
const switchToggleLabel = document.querySelector('.custom-switch label');
let autoplayTimer;

// show random quote on page load
updateQuote();

newQuoteBtn.addEventListener('click', () => {
  updateQuote();
});

function updateQuote() {
  const randomQuote = pickFromArray(quotes);
  const randomColour = pickFromArray(colours);

  quote.textContent = randomQuote.quote;
  author.textContent = randomQuote.author;

  blockQuote.style.backgroundColor = randomColour;
}

// new random quote every X seconds
function getQuoteInterval(seconds) {
  return setInterval(() => {
    updateQuote();
  }, seconds * 1000);
}

switchToggle.addEventListener('change', (e) => {
  let toggleLabelText;

  if (e.target.checked) {
    toggleLabelText = 'auto-play: ON';
    autoplayTimer = getQuoteInterval(60);
  } else {
    toggleLabelText = 'auto-play: OFF';
    clearInterval(autoplayTimer);
  }

  switchToggleLabel.textContent = toggleLabelText;
});

autoplayTimer = getQuoteInterval(60);
