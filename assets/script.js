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
var viewHighscore = document.getElementById('view-highscore');

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
        endGame();
    }
}
// highscore button
viewHighscore.addEventListener("click", function () {
    var retrieveScore = localStorage.getItem('Highscore');

    // create container for score
    questionContainer.innerHTML = '';
    var highscoreContainer = document.createElement("div");
    var highscoreContainerInput = document.createElement("ul");
    var presentHighscores = document.createElement("li");

    //append items to eachother
    presentHighscores.textContent = retrieveScore;
    highscoreContainerInput.appendChild(presentHighscores);
    highscoreContainer.appendChild(highscoreContainerInput);
    questionContainer.appendChild(highscoreContainer);
})

// function for ending the game and making the highscore form appear
function endGame() {
    // create button to insert scores
    questionContainer.innerHTML = '';
    var highscoreButton = document.createElement("button");
    highscoreButton.textContent = "Time's up! Click here to insert your highscore!";
    questionContainer.appendChild(highscoreButton);

    // create buttons for form
    highscoreButton.addEventListener("click", function () {
        questionContainer.innerHTML = '';
        var submitScore = document.createElement("button");
        var highscoreForm = document.createElement("form");
        var highscoreInput = document.createElement("input");
        submitScore.textContent = "Submit";
        highscoreForm.className = "input-form";

        //append buttons to eachother
        highscoreForm.appendChild(submitScore);
        highscoreForm.appendChild(highscoreInput);
        questionContainer.appendChild(highscoreForm);

        //submit button
        submitScore.addEventListener("click", function () {
            var playerInput = highscoreInput.value;
            localStorage.setItem('Highscore', playerInput);
        });
    });
}

// time penalty for error 
function appendTime() {
    count -= 10;
}

// quiz starts
countdownBegin.addEventListener("click", function () {
    var timer = setInterval(function () {
        count--;
        seconds.textContent = "Time left: " + count;
        if (count < 1) {
            clearInterval(timer);
        }
    }, 1000);
    displayQuestion();
})
