//variables
let btn=document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person= document.querySelector('.person');
const quotes = [
    {
        quote: "Our lives begin to end the day we become silent about things that matter.",
        person: "Martin Luther King, Jr."
    },
    {
        quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
        person: "Dalai Lama"
    },
    {
        quote: "The journey of a thousand miles begins with one step.",
        person: "Lao Tzu"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        person: "Winston Churchill"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: It goes on.",
        person: "Robert Frost"
    },
    {
        quote: "Your time is limited, don't waste it living someone else's life.",
        person: "Steve Jobs"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        person: "Franklin D. Roosevelt"
    },
    {
        quote: "The best way to predict the future is to create it.",
        person: "Peter Drucker"
    },
    {
        quote: "It is never too late to be what you might have been.",
        person: "George Eliot"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        person: "Sam Levenson"
    },
    {
        quote: "Do not wait for leaders; do it alone, person to person.",
        person: "Mother Teresa"
    },
    {
        quote: "Life is really simple, but we insist on making it complicated.",
        person: "Confucius"
    },
    {
        quote: "Believe you can and you're halfway there.",
        person: "Theodore Roosevelt"
    },
    {
        quote: "The best revenge is to be unlike him who performed the injustice.",
        person: "Marcus Aurelius"
    },
    {
        quote: "In the middle of difficulty lies opportunity.",
        person: "Albert Einstein"
    },
    {
        quote: "It's not what happens to you, but how you react to it that matters.",
        person: "Epictetus"
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        person: "Vidal Sassoon"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        person: "Mahatma Gandhi"
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        person: "Henry David Thoreau"
    },
    {
        quote: "The only impossible journey is the one you never begin.",
        person: "Tony Robbins"
    },];

    btn.addEventListener("click", function(){
        let random = Math.floor(Math.random()*quotes.length);
        quote.innerText= quotes[random].quote;
        person.innerText = quotes[random].person;

    })

    

