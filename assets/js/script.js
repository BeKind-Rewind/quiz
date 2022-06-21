

// place for the questions
/* array of objects as questions */
var questionIndex = 0;

var questions = [
    {
        question:"When was the first computer invented?",
        correct:"1943",
        options:["1", "2", "3", "4"]
    },
    {
        question:"Who is known as the father of computers?",
        correct:"bob",
        options:["a", "b", "c", "d"]
    },
    {
        question:"What was the first computer system that used color display?",
        correct:"1943",
        options:["1", "2", "3", "4"]
    },
    {
        question:"When was the first computer invented?",
        correct:"1943",
        options:["1", "2", "3", "4"]
    },
    {
        question:"When was the first computer invented?",
        correct:"1943",
        options:["1", "2", "3", "4"]
    },
]
console.log(questions[1]);

//     "What was the name of the first computer invented?",
//     "Who is known as the father of computers?",
//     "What was the first computer system that used color display?",
//     "What is the single most popular computer system ever sold?",
//     "Which company invented the USB port?",
// 


//display questions 
function displayQs(){
    var quiz = document.getElementById("quiz");
    quiz.textContent = questions[0].question;
}

displayQs();

// display options 
// be able to click option
// when option clicked, it goes to next question in array (loop)

// //when question answered, next question comes up
// /* extra: Correct or incorrect */
// // 4 answers each
// var answerQuestion1Correct="1943"
// var answerQuestion2Correct="Electronical Numerical Integrator and computer"
// var answerQuestion3Correct="Charles Babbage"
// var answerQuestion4Correct="Apple"
// var answerQuestion5Correct="Commodore 64"
// var answerQuestion6Correct="Intel Corporations"

// //make starting screen

// document.getElementById("start").addEventListener("click", changeState);
//     function changeState() {
//         document.getElementById("start").state = "hidden";
//         document.getElementById("quiz").state = "visible";
//     };

// // start screen with start button

// /* onClick "hidden" class applies to start screen AND is removed from questions */
// // when clicked: hides start screen ?changeState("hidden");? 
// buttonEl.addEventListener("click", function() {
//     startEl.setAttribute("hidden");
//     // reveales questions
//     quizEl.setAttribute("visible");
//   });

// // starts timer

// var counter = 100
// var countdown = function (){
//     console.log(counter);
//     counter--;
//         if(counter === 0 ){
//             console.log("blastoff");
//             clearInterval(startCountdown);
//         };   
// };

// var startCountdown = setInterval(countdown, 1000);
// // when timer reaches 0, clearInterval 
// // use setTimeout to execute at the same time that the timer reaches 0? and run funtion that displays screen with score and input initials
// // create ul and li for initials to be stored in array (document.createElement("li"); )

// // SCORING: number of correct answers in the time given.
// // PENALTY: incorrect answer subtracts 10 seconds from timer.


// // HIGHSCORE storage: see localStorage
// var highScoreList = [
//     'x1', 
//     "x2", 
//     "x3",
//     "x4",
//     "x5"
// ];

// var displayHighscore = function () {
//     var text = "";
//     var highScore = localStorage.getItem("highScoreList");
//     var highScoreArray = JSON.parse(highScore);
//     for (var i = 0; i < highScoreArray.length; i++) {
//         text += highScoreList[i] + "<br>";
//     };
// };

// displayHighscore ();
// // maybe need array.push() to store high scores.

// /* BONUS */

// // use eventListener mouseover to change button color 