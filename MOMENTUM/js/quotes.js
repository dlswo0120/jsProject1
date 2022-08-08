const quotes = [
    {
        quote:"Life is an unbroken succession of false situations.",
        author:"Thornton Wilder",
    },
    {
        quote:"The merit of an action lies in finishing it to the end.",
        author:"Genghis Khan",
    },
    {
        quote:"Hope sees the invisible, feels the intangible, and achieves the impossible.",
        author:"Helen Keller",
    },
    {
        quote:"Talent wins games, but teamwork wins championships.",
        author:"Michael Jordan",
    },
    {
        quote:"Learn as much by writing as by reading.",
        author:"Lord Acton",
    },
    {
        quote:"Let no one ever come to you without leaving better and happier.",
        author:"Mother Teresa",
    },
    {
        quote:"Nothing is a waste of time if you use the experience wisely.",
        author:"Auguste Rodin",
    },
    {
        quote:"It is a bad plan that admits of no modification.",
        author:"Publilius Syrus",
    },
    {
        quote:"Laughter is by definition healthy.",
        author:"Doris Lessing",
    },
    {
        quote:"Well begun is half done.",
        author:"Aristotle",
    }

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


