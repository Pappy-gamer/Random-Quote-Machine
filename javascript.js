var quotes = [
    `"Talk is cheap Show me the code."<br> <h4>-Linus Torvalds</h4>`, 
    `"Programs must be written for people to read, and only incidentally for machines to execute."<br> <h4>-Harold Abelson</h4>`,
    `"I'm not a great programmer; I'm just a good programmer with great habits."<br> <h4>-Kent Beck</h4>`,
    `"Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime."<br> <h4>-Muhammad Waseem</h4>`,
    `"Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains."<br> <h4>-Bill Gates</h4>`,
    `"Learning to code is useful no matter what your career ambitions are."<br> <h4>-Arianna Huffington</h4>`,
    `"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."<br> <h4>-Martin Golding</h4>`,
    `“Everybody should learn to program a computer, because it teaches you how to think.”<br> <h4>-Steve Jobs</h4>`,
    `“First, solve the problem. Then, write the code.”<br> <h4>-John Johnson</h4>`,
    `“Experience is the name everyone gives to their mistakes.”<br> <h4>-Oscar Wilde</h4>`,
    `“Make it work, make it right, make it fast.”<br> <h4>-Kent Beck</h4>`,
    `“Fix the cause, not the symptom.”<br> <h4>-Steve Maguire</h4>`,
    `“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”<br> <h4>-Martin Fowler</h4>`
] 


function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}