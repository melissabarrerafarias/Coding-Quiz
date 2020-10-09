var startButton = document.querySelector("#start-button");
var buttonChoice = document.createElement("button");
var testArea = document.querySelector("#options");

var beginQuiz = function(event) {
    buttonChoice.textContent = "Option-1";
    buttonChoice.className = "button";
    testArea.appendChild(buttonChoice);
}

startButton.addEventListener("click", beginQuiz);