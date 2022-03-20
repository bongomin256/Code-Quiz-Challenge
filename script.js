// Creating the global variables
var timerEL = document.querySelector('#timer')
var startButton = document.querySelector('.start-btn')
var quiz = document.querySelector('#questions')
var option1 = document.querySelector('#option1')
var option2 = document.querySelector('#option2')
var option3 = document.querySelector('#option3')
var option4 = document.querySelector('#option4')

var welcomeSection = document.querySelector('.welcome')
var questionSection = document.querySelector('.question-Container')
var scoreSection = document.querySelector('.done')

var highscoreEl = document.querySelector('.highscores')
var submitBtn = document.querySelector('.submit-btn')
var scoreText = document.querySelector('#score-text')

var timer;
var timerCount;

//creating the init function for managing page load
function init() {
    highscoreEl.style.display = "none";
    questionSection.style.display = "none";
    scoreSection.style.display = "none";
};

// creating startGame function for when the start button is clicked
function startGame(){
    timerCount = 30;
    startButton.disabled = true;
    welcomeSection.setAttribute("style", "display: none" )
    questionSection.style.display = "block"

    startTimer();
    displayQuiz();
};

// creating startTimer for to start the timer
function startTimer(){
    timer = setInterval(function() {
        timerCount--;
    
        if(timerCount <= 0){
            clearInterval(timer)
        } else{
            timerEL.textContent = timerCount;
        }

    }, 1000)
};



init();