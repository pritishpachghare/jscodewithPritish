const answers = [
    { key: "Hello", answer: "Hello" },
    { key: "How are you?", answer: "I'm fine" },
    { key: "Who are you?", answer: "I'm a robot" },
    { key: "How old are you?", answer: "You just created me" },
    { key: "Who created you?", answer: "The best JS developer, you!" },
];

let Question = prompt("Ask me any question?")

for (let ans of answers) {
    if (ans.key.toLowerCase() === Question.toLowerCase()) {
        console.log('You: ' + Question);
        console.log('Ans: ' + ans.answer);
        break;
    }
    if (ans.key === answers[answers.length - 1].key) {
        console.log('Ans: ' + "I don't know what you are asking?");
    }
}

