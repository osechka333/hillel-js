// OPTIMIZATION
// 1. ALL MAGIC SYMBOLS (не понятно что за переменные и значения) SHOULD BE CONSTANT: score, prompt
// 2. Убрать ссылки на функцию ? prompt : confirm; передать сразу функцию
// 3. BEFORE IF IT WAS: const askFunction =  type == 'prompt' ? prompt : confirm; - less difficult if
// 4. Add separate functions

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

let score = runQuiz(QUIZ);

function runQuiz(questions) {
    let score = WRONG_ANSWER;

    for(const {question, answer, ask} of questions) {
        if(ask(question) === answer) {
            score +=RIGHT_ANSWER;
        }
    }

    return score;
}
alert(score);