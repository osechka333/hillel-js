// OPTIMIZATION
// 1. ALL MAGIC SYMBOLS (не понятно что за переменные и значения) SHOULD BE CONSTANT: score, prompt
// 2. Убрать ссылки на функцию ? prompt : confirm; передать сразу функцию
// BEFORE: const askFunction =  type == 'prompt' ? prompt : confirm;

const RIGHT_ANSWER = 10;
const WRONG_ANSWER = 0;
const QUIZ = [
    {
        question: "How many chromosomes does a healthy person have?",
        answer: '47',
        ask: prompt
    },
    {
        question: "is a putin dick?",
        answer: true,
        ask: confirm
    }
]

let score = WRONG_ANSWER;

for(const {question, answer, ask} of QUIZ) {
    if(ask(question) === answer) {
        score +=RIGHT_ANSWER;
    }
}

alert(score);