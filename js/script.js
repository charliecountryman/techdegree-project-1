// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Used querySelector to select quote-box div and store it in quoteBox variable for use later
const quoteBox = document.querySelector('#quote-box');

//quotes objects and properties
var quotes = [
  {
    quote: 'Get busy living or get busy dying.',
    source: 'Stephen King',
    citation: 'The Shawshank Redemption',
    date: '1982',
    tags: 'Authors'
   },

   {
     quote: "Those who belive in telekenesis, raise my hand",
     source: "Kurt Vonnegut",
     tags: "Authors"
    },
    {
      quote: "I am ready to meet my Maker. Whether my Maker is prepared for the great ordeal of meeting me is another matter.",
      source: "Winston Churchill",
      date: "1964",
      tags: "Historical Figures"
    },
    {
      quote: "The flower that blooms in adversity is the most rare and beautiful of all",
      source: "Chinese Emperor",
      citation: "Mulan",
      date: "1998",
      tags: "Films"
    },
    {
      quote: "Never put off till tomorrow what may be done day after tomorrow just as well.",
      source: "Mark Twain",
      tags: "Authors"
    }
  ];

//getRandomQuote() function selects a random object from the array
function getRandomQuote() {
  randomValue = Math.floor(Math.random() * (quotes.length));
  return quotes[randomValue];
}

//getRandomColor() function generates a random color using hexadecimal values
//and then changes the page and button background color
function getRandomColor() {
const characters = '0123456789ABCDEF';
let number = '#'
for (let i = 0; i < 6; i ++) {
  number += characters[Math.floor(Math.random() * 16)]
  }
  document.querySelector('body').style.backgroundColor=`${number}`;
  document.getElementById('loadQuote').style.backgroundColor = `${number}`;
}

//printQuote function will call getRandomQuote, getRandomColor, gather appropriate
//object properties and display them on the page, as well as changing background color
function printQuote() {
  const quoteObject = getRandomQuote();

  getRandomColor();

//this begins constructing the string with the essential object properties
let string =
  `<p class="quote">${quoteObject.quote} </p>
  <p class="source">${quoteObject.source}`;

//these if statements detect if there are optional properties
//and if so, it adds them to the string
if (quoteObject.citation) {
string +=
   `<span class="citation">${quoteObject.citation}</span>`;
 }
 if (quoteObject.date) {
   string +=
   `<span class="year">${quoteObject.date}</span>`
  }

  if (quoteObject.tags) {
    string +=
    `<span class="tags">, ${quoteObject.tags}</span>`
   }
string += '</p>';

//we then set the innerHTML of the quoteBox div to the value of string
//to display the quote object properties on the page
quoteBox.innerHTML = string;

}
//The below setInterval method calls printQuote function every 30 seconds
setInterval(printQuote, 30000);
