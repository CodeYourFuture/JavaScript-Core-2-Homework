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
