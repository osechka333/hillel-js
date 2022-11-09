const quizData = [
    {
        question: "How many chromosomes does a healthy person have?",
        answer: '47'
    },
    {
        question: "is a putin dick?",
        answer: 'true'
    },
    {
        question: "How many chromosomes does Putin have?",
        correct: '47'
    },
    {
        question: "How many dumb sheep are in Moscow (in millions)?",
        correct: '144'
    },
    {
        question: "Should the monument to Catherine II in Odessa be demolished?",
        correct: 'true'
    },
    {
        question: "How many black packages should be per orc?",
        correct: '1'
    },
    {
        question: "How do you rate the work of ZSU from 1 to 10?",
        correct: '10'
    },
    {
        question: "From what positions was the attack on Belarus prepared?",
        correct: '4'
    },
    {
        question: "Is it necessary to burn the Soviet flag?",
        correct: 'true'
    },
    {
        question: "Do you support the withdrawal of foreign companies from Moscow?",
        correct: 'true'
    },
    {
        question: "Do you consider sosia as your home?",
        correct: 'false'
    },
];
let score = 0;
const userData = loadQuiz();
//const userScore = calculateUserScore(quizData, userData);
const finalResults = showUserScore(userData);

console.log(userData, finalResults);

function loadQuiz() {
    let userAnswer;
    let userScore = 0;
    for(let i = 0; i < quizData.length; i++) {
        do {
            userAnswer = prompt(`Answer the question: ${quizData[i].question}`);
            // answers.push(userAnswer);
            userScore = calculateUserScore(quizData, userAnswer);
        } while (userAnswer = null || userAnswer ==='');
    }
    return userScore;
}
function calculateUserScore(quizData, userData){
        if (userData == quizData[i].answer) {
            return score = score + 10;
        }
}
function showUserScore(userScore) {
    alert(`Your final quiz score is ${userScore}`);
}
