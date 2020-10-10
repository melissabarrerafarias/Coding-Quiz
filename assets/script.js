var quizQuestions = [
{ question: 'Inside which HTML element do we put the Javascript?', 
    choices: ["<script>", "<js>", "scripting>", "<javascript>"],
    answer: "<script>" },

{ question: 'Where is the correct place to insert a Javascript?',
    choices: ["Both the <head> section and the <body> section are correct", "The <head> section", "The bottom of the <body> section", "The very top of the <body> section"],
    answer: "The bottom of <body> section" },

{ question: 'Which built-in method returns the length of the string?',
    choices: ["size()", "length()", "long()", "All of the above"],
    answer: "length()" },

{ question: 'How do you write "Hello World" in an alert box?', 
    choices: ["('Hello World');", "response.write('Hello World');", "alert('Hello World');", "msg('Hello World');"],
    answer: "alert('Hello World');" }, 

{ question: 'How do you create a function in Javascript?',
    choices: ["function: myFunction()", "function myFunction()", "function - myFunction()", "function = myFunction()"], 
    answer: "function = myFunction()", },
];

var countdownBegin = document.getElementById('start');
var seconds = document.getElementById('timer-text');
var count = 60;
var currentQuestion = quizQuestions[0];
var questionContainer = document.getElementById('question-container');
var questionHeader = document.getElementById('question-header');
var answers = document.getElementsByClassName('answer');

console.log({questionHeader});

function displayQuestion() {
    questionHeader.textContent = currentQuestion.question;
    for ( i = 0; i < answers.length; i++) {
        answers[i].textContent = currentQuestion.choices[i];
        answers[i].addEventListener("click", checkAnswer);
    }

}

function checkAnswer(event) {
    var chosenAnswer = event.target.textContent;
    console.log({chosenAnswer});
    if (chosenAnswer = currentQuestion.answer) {
        console.log("hello!");
    }
    else {
        console.log("hello");
    }
    displayQuestion();
}


countdownBegin.addEventListener("click", function() {
    setInterval(function () {
        count-- ;
        seconds.textContent = "Time left: " + count;
    }, 1000);
    displayQuestion();
});

