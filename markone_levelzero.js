var readlineSync = require("readline-sync");
var name = readlineSync.question("Please enter your name ");
var score = 0;
console.log("Welcome to HOW WELL DO YOU KNOW SIDDHANT, "+ name + ".")
function play(question, answer){
  var questionNow = readlineSync.question(question)
  if (questionNow === answer) {
    console.log("You're right! "); score = score+1
   }else{
     console.log("You're wrong :( "); score = score-1
   }
  }
var currentQuestion =[{question:"Who is Siddhant's favourite philosopher ", answer: "Nietzsche"},{question:"Which social media site is Siddhant most active on? ", answer: "Twitter"}, {question:"What is the name of Siddhant's favourite band? ", answer: "Coldplay"},{question:"What kind of book does Siddhant love reading? ",answer: "Non-fiction"},{question:"Who is Siddhant's favoutite filmmaker? ", answer: "Wes Anderson"}];
for (i=0; i<currentQuestion.length; i++){
  var questionBank = currentQuestion[i]
  play (questionBank.question, questionBank.answer)
}
console.log("-------------");
console.log("Your final score is: " + score);
