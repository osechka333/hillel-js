// Declare the "score" variable
var score = 0;
// Create the questions array
var questions = [
    ["T or F: Two plus two is ten."]
];
// Create the answer key array
var answer_key = [
    ["F"],
    ["T"],
    ["F"],
    ["T"],
    ["T"]
];
// Ask each question
function askQuestion(question) {
    let answer = prompt(question[0], "");
    if (answer.toUpperCase() == answer_key[i]) {
        alert("Correct!");
        score++;
    } else if (answer==null || answer=="") {
        alert("You must enter a value!");
        i--;
    } else {
        alert("Sorry. The correct answer is " + answer_key[i]);
    }
}
for (var i = 0; i < questions.length; i++) {
    askQuestion(questions[i]);
}

// Caclulate score
function scoreTest(answer, questions) {
    var score = (answer/questions) * 100;
    return score;
}
var message = "Your score for the test is " + scoreTest(score, questions.length);
alert("<p>" + message + "%</p>")