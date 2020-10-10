var quizQuestions = [
    {
        question: 'Inside which HTML element do we put the Javascript?',
        choices: ["<script>", "<js>", "<scripting>", "<javascript>"],
        answer: "<script>"
    },

    {
        question: 'Where is the correct place to insert a Javascript?',
        choices: ["Both the <head> section and the <body> section are correct", "The <head> section", "The bottom of the <body> section", "The very top of the <body> section"],
        answer: "The bottom of the <body> section"
    },

    {
        question: 'Which built-in method returns the length of the string?',
        choices: ["size()", "length()", "long()", "All of the above"],
        answer: "length()"
    },

    {
        question: 'How do you write "Hello World" in an alert box?',
        choices: ["('Hello World');", "response.write('Hello World');", "alert('Hello World');", "msg('Hello World');"],
        answer: "alert('Hello World');"
    },

    {
        question: 'How do you create a function in Javascript?',
        choices: ["function: myFunction()", "function myFunction()", "function - myFunction()", "function = myFunction()"],
        answer: "function = myFunction()",
    },
];
var countdownBegin = document.getElementById('start');
var seconds = document.getElementById('timer-text');
var count = 60;
var currentQuestion = 0;
var questionContainer = document.getElementById('question-container');
var questionHeader = document.getElementById('question-header');
var answers = document.getElementsByClassName('answer');

console.log({ questionHeader });


function displayQuestion() {
    var question = quizQuestions[currentQuestion];
    questionHeader.textContent = question.question;
    for (i = 0; i < answers.length; i++) {
        answers[i].textContent = question.choices[i];
        answers[i].addEventListener("click", checkAnswer);
    }
}

function checkAnswer(event) {
    var chosenAnswer = event.target.textContent;
    console.log({ chosenAnswer });
    if (event.target.textContent === quizQuestions[currentQuestion].answer) {
        console.log("correct!");
    }
    else {
        console.log("incorrect!");
        appendTime();
    }
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        displayQuestion();
    }
    else {
        questionContainer.innerHTML = '';
        var highscoreButton = document.createElement("button");
        highscoreButton.textContent = "Time's up! Click here to insert your highscore!";
        questionContainer.appendChild(highscoreButton);
    }
}


function appendTime() {
    count -= 10;
}

countdownBegin.addEventListener("click", function () {
    var timer = setInterval(function () {
        count--;
        seconds.textContent = "Time left: " + count;
        if (count < 1) {
            clearInterval(timer);
        }
    }, 1000);
    displayQuestion();
});

