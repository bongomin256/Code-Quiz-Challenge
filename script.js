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

    //calling the startTimer and displayQuiz function
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

//creating the function to update the question section with the questions.
var currentQuiz = 0;
var lastQuiz = false;

function displayQuiz() {

    if(currentQuiz == questions.length -1) {
        lastQuiz = true;
    }
    
    // updating the question section with the current question
    quiz.textContent = questions[currentQuiz].Question;
    option1.textContent =questions[currentQuiz].Options[0];
    option2.textContent =questions[currentQuiz].Options[1];
    option3.textContent =questions[currentQuiz].Options[2];
    option4.textContent =questions[currentQuiz].Options[3];
}

function clickedAnswer(event) {
  
    //checking if the right answer.
    if(event.target.textContent === questions[currentQuiz].Answer){
        timerEL.textContent = timerCount;
    } else {
        timerCount-=2;
        timerEL.textContent = timerCount;
    }
    
     //checking if it the last question
    if(lastQuiz) {
        //Setting the remaining time left to be the scores
        scoreText.textContent = timerCount;

        //making the score section to be display after and hiding question and highscores of the page
        questionSection.style.display = "none"
        scoreSection.style.display = "block"
        highscoreEl.style.display = "none"
        // stopping the timer if it is the last quiestion
        timerCount = 0
    } else {
        // updating the curent question with the next question to display
        currentQuiz = currentQuiz + 1;
        displayQuiz();
    }  
};

//setting up a displayHighscores function
function displayHighscores(event) {

    var userInitial = document.querySelector('#tex-initial').value
    var userScores = timerCount.value

    // storing the inital and the score in the local storage
    localStorage.setItem("userInitial", userInitial);
    localStorage.setItem("userScores", userScores);

    event.preventDefault();
    event.stopPropagation();
    
    // setting the display of question and score section to none and displaying highscore page
    questionSection.style.display = "none"
    scoreSection.style.display = "none"
    highscoreEl.style.display = "block"

    //get the store data from the local storage
    document.querySelector('.initial').textContent =localStorage.getItem("userInitial");
    document.getElementById('finalscore').textContent = localStorage.getItem("userScores");

};

// adding eventlistener to submit button 
submitBtn.addEventListener("click", displayHighscores)

//adding the eventlsitner to all the questions answers for when they are clicked
option1.addEventListener("click", clickedAnswer)
option2.addEventListener("click", clickedAnswer)
option3.addEventListener("click", clickedAnswer)
option4.addEventListener("click", clickedAnswer)

// adding Evenlistener to the start quiz button.

startButton.addEventListener("click", startGame)

//creating the array object questions
var questions = [
    {
        Question: "Commonly Used Data type Do not include?",
        Answer: "alert",
        Options: [
            "Strings",
            "Booleans",
            "alert",
            "numbers",
        ],
    },
    {
        Question: "The condition in an if/else statement is enclosed within?",
        Answer: "Curly brackets",
        Options: [
            "Quotes",
            "Curly brackets",
            "Square brackets",
            "Booleans"
        ]
    },
    {
        Question: "What is the correct syntax for referring to an external script called 'script.js'?",
        Answer: "<script src='script.js'>",
        Options: [
            "<script src='script.js'>",
            "<script name='script.js'>",
            "<script href='script.js'>",
            "<script file='script.js'>"
        ]   
    },
    {
        Question: "Arrays in JavaScript can be used to store?",
        Answer: "All the above",
        Options: [
            "Number and Strings",
            "Booleans",
            "Other arrays",
            "All the above"
        ]   
    },
    {
        Question: "What does HTML stands for?",
        Answer: "Hyper Text MarkUp Language",
        Options: [
            "Hyper Tool Multi Language",
            "Hyper Text MarkUp Language",
            "Hyper Text Multiple Language",
            "Hyper Text Preprocessor"
        ]
    }
];

// calling the init function
init();