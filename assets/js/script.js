

// place for the questions
/* array of objects as questions */
var questions= [
 "When was the first computer invented?",
 "What was the name of the first computer invented?",
 "Who is known as the father of computers?",
 "What was the first computer system that used color display?",
 "What is the single most popular computer system ever sold?",
 "Which company invented the USB port?",
]

//display questions 

//when question answered, next question comes up
/* extra: Correct or incorrect */
// 4 answers each
var answerQuestion1Correct="1943"
var answerQuestion2Correct="Electronical Numerical Integrator and computer"
var answerQuestion3Correct="Charles Babbage"
var answerQuestion4Correct="Apple"
var answerQuestion5Correct="Commodore 64"
var answerQuestion6Correct="Intel Corporations"
//make starting screen

document.getElementById("box1").addEventListener("mouseover", changeState);
    function changeState() {
        document.getElementById("box1").innerHTML = "QUESTIONS!";
        document.getElementById("box1").style.backgroundcolor = "orange";
    };

// start screen with start button
/* onClick "hidden" class applies to start screen AND is removed from questions */
// when clicked: hides start screen
// reveales questions
// starts timer