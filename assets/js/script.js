
var score = 0;
var counter = 60 ;
var highscore = localStorage.getItem("highscore");
var startBtnEl = document.getElementById("start");
var answerBtnEl = document.getElementById("answer-btns");
var questionsEl = document.getElementById("question");
var questionBoxEl = document.getElementById("question-box");
var titleEl = document.getElementById("title");
var bodyEl = document.getElementById("text");
var boxEl = document.getElementById("main-box");
var interval;
var currentQuestionIndex

var questions = [
    {
        question: "What is the capital of Massachusetts",
        answers: [  
            {text: "Westfield", correct: false },
            {text: "Springfield", correct: false },
            {text: "Russel", correct: false },
            {text: "Boston", correct: true }
    ]
        
    },
    {
        question: "What is the capital of California",
        answers: [  
            {text: "Fresno", correct: false },
            {text: "Sacramento", correct: true },
            {text: "San Francisco", correct: false},
            {text: "San Diego", correct: false},
        ]
        
    },
    {
        question: "What is the capital of Florida",
        answers: [ 
            {text: "Tallahasse", correct: true },
            {text: "Miami", correct: false },
            {text: "Montgomery", correct: false },
            {text: "Boston", correct: false },
        ]
        
    },
    {
        question: "What is the capital of Texas",
        answers: [ 
           {text: "Westfield", correct: false },
            {text: "Austin", correct: true },
            {text: "Harrisburg", correct: false },
            {text: "Boston", correct: false },
        ]
       
    },
    
]

function startQuiz() {
    boxEl.classList.add("hide");
    score = 0
    currentQuestionIndex = 0
    interval = setInterval(clockTimer, 1000)
    questionBoxEl.classList.remove("hide")
    nextQuestion()
};

function nextQuestion() {
    resetState()
    showQuestion(questions[currentQuestionIndex])
};

function resetState() {
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild)
    }
};

function showQuestion(question) {
    questionsEl.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerBtnEl.appendChild(button)
    })
};

function endQuiz() {
    clearInterval(interval)
    counter = 60
    startBtnEl.innerText = "Restart"
    boxEl.classList.remove("hide")
    questionBoxEl.classList.add("hide")
    username = prompt("Please enter your name to save your score is " + score )
    if (highscore !== null) {
        if(score > highscore) {
            parseInt(localStorage.setItem("highscore", score));
            localStorage.setItem("username", username);
        }
    } else {
        parseInt(localStorage.setItem("highscore", score));
        localStorage.setItem("username", username)
    }
    titleEl.innerText = "You have reached the end of this quiz! Your final score is " + score + " ! " + "Current Highscore is " + localStorage.getItem("highscore");
    bodyEl.innerText = "";
};

function clockTimer() {
    counter--
    span = document.getElementById("time");
    span.innerHTML =  counter;
    if (counter <= 0 ) {
        endQuiz()
    }
};

function selectAnswer(e) {
    var selectedBtn = e.target
    var correct = selectedBtn.dataset.correct
    Array.from(answerBtnEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    setTimeout(function() {
        if (correct) {
            score = score + 10
        } else  {
            counter = counter - 15
        };
        currentQuestionIndex++
        if (questions.length > currentQuestionIndex) {
            nextQuestion()
        } else {
            endQuiz()
        }
    }, 1000)
};

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("incorrect")
    }
};

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("incorrect")
};


startBtnEl.addEventListener("click" , startQuiz);