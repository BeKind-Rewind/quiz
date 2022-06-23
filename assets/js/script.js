const startQuiz = document.getElementById('startQuiz');
const startScreen = document.getElementById('startScreen');

// place for the questions
/* array of objects as questions */
var score = 0;

// for (var i=0; i< questions.length; i++){
//     var response = window.prompt(questions[i].prompt)
//     if(response === questions[i].answer){
//         score++;
//         alert("Correct!");
//     } else {
//         alert("Nope! lol");
//     }
// }
// alert("You got " + score + "/") + questions.length;


var questions = [
    {
        prompt:"When was the first computer invented?",
        answer:"1943",
        options:["1943", "1951", "1956", "1962"]
    },
    {
        prompt:"Which popular company designed the first CPU?",
        answer:"Intel Corp.",
        options:["Apple Inc.", "Intel Corp.", "Dell Corp.", "Microsoft Corp."]
    },
    {
        prompt:"What was the first computer system that used color display?",
        answer:"Apple",
        options:["IMB", "Apple", "Dell", "4"]
    },
    {
        prompt:"What is the single most popular computer system ever sold?",
        answer:"Commodore 64",
        options:["IBM PC", "iMac", "Apple II", "Commodore 64"]
    },
    {
        prompt:"Which company invented the USB port?",
        answer:"Intel Corporations",
        options:["Intel Corp.", "HP Inc.", "Microsoft Corp.", "IBM Corp."]
    },
]
console.log(questions[0]);


//display questions 
function displayQs(){
    var quiz = document.getElementById("quiz");
    quiz.textContent = questions[0].prompt;
    // var btnAnswer = document.getElementById("btnAnswer")
    // btnAnswer.textContent = questions[].options;
}

displayQs();



// display options 
// be able to click option
// when option clicked, it goes to next question in array (loop)

// //when question answered, next question comes up
// /* extra: Correct or incorrect */


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
//         if(counter <= 0 ){
//             window.setTimeout("Tick()", 1000);
//         };   
// };



var startCountdown = setInterval(countdown, 1000);

// On click of start button, hide start screen and display quiz question 1

startQuiz.addEventListener('click', () => {
    // hide button
    startScreen.style.display = 'none';
    //show div
    const quiz = document.getElementById('quiz');
    quiz.style.display = 'block';
});

function UpdateTimer() { counter.innerHTML = counter; }

// when timer reaches 0, clearInterval 
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