// when i click start button quiz starts with 60 sec time

//show timer on screen 60 sec

//else  subtract 10 sec
// when timer runs out alert your score is
// quiz questions Capitals of States
var startBtnEl = document.querySelector(".start-btn");
var viewScoreBtnEl = document.querySelector(".view-score");
var questionsEl = document.querySelector("#questions");
var timerEl =document.querySelector("#time");























var questions = [
    {
        question: "What is the capital of Massachusetts",
        answers: {
            1: "Westfield",
            2: "Springfield",
            3: "Russel",
            4: "Boston"
        },
        correctAnswer: "4"
    },
    {
        question: "What is the capital of California",
        answers: {
            1: "Fresno",
            2: "Sacramento",
            3: "San Francisco",
            4: "San Diego"
        },
        correctAnswer: "2"
    },
    {
        question: "What is the capital of Florida",
        answers: {
            1: "Tallahasse",
            2: "Miami",
            3: "Montgomery",
            4: "Boston"
        },
        correctAnswer: "1"
    },
    {
        question: "What is the capital of Texas",
        answers: {
            1: "Westfield",
            2: "Austin",
            3: "Harrisburg",
            4: "Boston"
        },
        correctAnswer: "2"
    },
    {
        question: "What is the capital of Montana",
        answers: {
            1: "Altmore",
            2: "Clanton",
            3: "Helena",
            4: "Auburn"
        },
        correctAnswer: "3"
    },
    {
        question: "What is the capital of Missouri",
        answers: {
            1: "Guntersville",
            2: "Jefferson City",
            3: "Greenville",
            4: "Ozark"
        },
        correctAnswer: "2"
    },
    {
        question: "What is the capital of Colorado",
        answers: {
            1: "Denver",
            2: "Cortez",
            3: "Leadville",
            4: "Loveland"
        },
        correctAnswer: "1"
    },
    {
        question: "What is the capital of Arkansas",
        answers: {
            1: "Pine Bluff",
            2: "Helena",
            3: "Jonesboro",
            4: "Little Rock"
        },
        correctAnswer: "4"
    },
    {
        question: "What is the capital of Connecticut",
        answers: {
            1: "Hartford",
            2: "Groton",
            3: "Farmington",
            4: "Danbury"
        },
        correctAnswer: "1"
    },
    {
        question: "What is the capital of Georgia",
        answers: {
            1: "Rome",
            2: "Augusta",
            3: "Atlanta",
            4: "Savannah"
        },
        correctAnswer: "3"
    },
]