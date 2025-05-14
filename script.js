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

// Arrow function to get a random quote
const showRandomQuote = () => {
  const index = Math.floor(Math.random() * quotes.length);
  const { text, author } = quotes[index]; 

  quoteEl.textContent = `"${text}"`;
  authorEl.textContent = `— ${author}`;
};

// Arrow function to add event listener
const initQuoteApp = () => {
  newQuoteBtn.addEventListener('click', showRandomQuote);
  showRandomQuote(); 
};

initQuoteApp();


