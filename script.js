const results = [
    "The best way to get started is to quit talking and begin doing. - Walt Disney",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "If you are working on something exciting, it will keep you motivated. - Unknown",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
    "Dream bigger. Do bigger. - Unknown",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Great things never come from comfort zones. - Unknown",
    "Push yourself, because no one else is going to do it for you. - Unknown" 
]


const index = new Set()
const quoteele = document.getElementById("result")

function generate(){
    const randmindex = Math.floor(Math.random() * results.length);
    const result = results[randmindex];
    quoteele.innerHTML = result;
}