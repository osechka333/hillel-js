// how to think for solve the solution
// 1. create the const - where to store the questions
const QUIZ = [
    {
        question: "How many chromosomes does a healthy person have?",
        answer: '47',
        type: 'prompt'
    },
    {
        question: "is a putin dick?",
        answer: true,
        type: 'confirm'
    }
]

// 2. decide what you want to get in the end: - example: get the score and return alert and increase the score
let score = 0;

for(const {question, answer, type} of QUIZ) { // дестуктуризация вместо item => {question, answer, type}
    const askFunction =  type == 'prompt' ? prompt : confirm;
    if(askFunction(question) === answer) {
        score +=10
    }
}

alert(score);
