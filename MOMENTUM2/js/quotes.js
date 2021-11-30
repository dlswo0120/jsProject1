const quotes =[
    {
        quote:"Dignity does not consist in possessing honors, but in deserving",
        author:"Aristotle",
    },
    {
        quote:"Humor is by far the most significant activity of the human brain.",
        author:"Edward De Bono",
    },
    {
        quote:"Life is like riding a bicycle. To keep your balance you must keep moving.",
        author:"Albert Einstein",
    },
    {
        quote:"He that would live in peace and at ease, must not speak all he knows nor judge all he sees.",
        author:"Benjamin Franklin",
    },
    {
        quote:"It is not white hair that engenders wisdom.",
        author:"Menander",
    },
    {
        quote:"Wealth is the slave of a wise man. The master of a fool.",
        author:"Seneca",
    },
    {
        quote:"Seek not happiness too greedily, and be not fearful of happiness.",
        author:"Lao-tzu",
    },
    {
        quote:"Wish not so much to live long as to live well.",
        author:"Benjamin Franklin",
    },
    {
        quote:"The greatest griefs are those we cause ourselves.",
        author:"Sophocles",
    },
    {
        quote:"Never spend your money before you have it.",
        author:"Thomas Jefferson",
    },
];

const chosenQuotes = quotes[Math.floor(Math.random() * quotes.length)];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

quote.innerText = chosenQuotes.quote;
author.innerText = chosenQuotes.author;