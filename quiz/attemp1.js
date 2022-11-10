
const quizData = [
    {
        question: "How many chromosomes does a healthy person have?",
        answer: '47'
    },
    {
        question: "is a putin dick?",
        answer: true
    },
    // {
    //     question: "How many chromosomes does Putin have?",
    //     correct: '47'
    // },
    // {
    //     question: "How many dumb sheep are in Moscow (in millions)?",
    //     correct: '144'
    // },
    // {
    //     question: "Should the monument to Catherine II in Odessa be demolished?",
    //     correct: true
    // },
    // {
    //     question: "How many black packages should be per orc?",
    //     correct: '1'
    // },
    // {
    //     question: "How do you rate the work of ZSU from 1 to 10?",
    //     correct: '10'
    // },
    // {
    //     question: "From what positions was the attack on Belarus prepared?",
    //     correct: '4'
    // },
    // {
    //     question: "Is it necessary to burn the Soviet flag?",
    //     correct: true
    // },
    // {
    //     question: "Do you support the withdrawal of foreign companies from Moscow?",
    //     correct: true
    // },
    // {
    //     question: "Do you consider sosia as your home?",
    //     correct: false
    // },
];

let scoreCounter;
const userData = loadQuiz();
const finalData = calculateUserScore(userData);

console.log(userData, finalData);

function loadQuiz() {
    let userAnswer
    let answers = [];
    for(let i = 0; i < quizData.length; i++) {
        do {
            userAnswer = prompt(`Answer the question ${quizData[i].question}`);
            answers.push(userAnswer);
        } while (userAnswer = null || userAnswer ==='');
    }
    return answers;
}
function calculateUserScore(userData) {
    for(let i = 0; i < userData.length; i++) {
        do {
            scoreCounter = scoreCounter + 10;
        } while (userData[i] === quizData[i].correct);
    }
}


// function getAction() {
//     let userAction;
//     do {
//         userAction = prompt(`Specify the action ${ACTION_LIST.join(',')}`);
//     } while (!ACTION_LIST.includes(userAction));
//     return userAction;
// }
//
// function userScore() {
//     if (selectedAnswer === 'correct') {
//         scoreCounter = scoreCounter + 5; // increases scoreCounter by 5
//
//         // sets the element text to the current score
//         scoreCounterElemet.innerText = scoreCounter;
//     }
//     console.log('Increase Score')
// }
