const container = document.getElementById('container');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const prevQuote = [];

function getRandomQuote() {
  fetch('https://type.fit/api/quotes')
    .then((res) => res.json())
    .then((data) => {
      let randomNumber = Math.floor(Math.random() * data.length);
      container.innerHTML = `
      <div class="quote" id="quote">${data[randomNumber].text}</div>
      <div class="author" id="author">- ${data[randomNumber].author}</div>
      `;
      prevQuote.push(data[randomNumber]);
    });
}

// function getPreviousQuote() {
//   const prevIndex = prevQuote.length - 2;
//   if (prevQuote.length > 1) {
//     quote.innerText = prevQuote[prevIndex].text;
//     author.innerText = prevQuote[prevIndex].author;
//   } else {
//     quote.innerText = 'You have no previous quotes';
//   }
// }

getRandomQuote();

// prevBtn.addEventListener('click', getPreviousQuote);

nextBtn.addEventListener('click', getRandomQuote);
