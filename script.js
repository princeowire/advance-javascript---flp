const quotes = [
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { text: "In order to be irreplaceable, one must always be different.", author: "Coco Chanel" }
];

const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const toggleQuotesBtn = document.getElementById('toggleQuotesBtn');
const allQuotesEl = document.getElementById('allQuotes');

// Show one random quote
const showRandomQuote = () => {
  const index = Math.floor(Math.random() * quotes.length);
  const { text, author } = quotes[index]; 
  quoteEl.textContent = `"${text}"`;
  authorEl.textContent = `— ${author}`;
};

// Render all quotes using forEach
const renderAllQuotes = () => {
  allQuotesEl.innerHTML = ''; // Clear previous
  quotes.forEach((quote, i) => {
    const quoteDiv = document.createElement('div');
    quoteDiv.className = 'quote-item';
    quoteDiv.innerHTML = `<p>"${quote.text}"</p><p>— ${quote.author}</p>`;
    allQuotesEl.appendChild(quoteDiv);
  });
};

// Toggle visibility of all quotes
let isVisible = false;
toggleQuotesBtn.addEventListener('click', () => {
  isVisible = !isVisible;
  allQuotesEl.style.display = isVisible ? 'block' : 'none';
  toggleQuotesBtn.textContent = isVisible ? 'Hide all ▲' : 'See all ◇';
  if (isVisible) renderAllQuotes();
});

// Initialize
newQuoteBtn.addEventListener('click', showRandomQuote);
showRandomQuote();
