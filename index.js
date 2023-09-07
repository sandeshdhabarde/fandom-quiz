var score = 0;
var readlineSync = require("readline-sync");
 
var userName = readlineSync.question("What is your name? ");
  
console.log("\nHey " + userName + "! Welcome to HOW MUCH DO YOU KNOW about Tmkoc :)\n" + "\nRules:");
console.log("1. Answer 3 right you go to level 2, then 2 right you go to level 3.");
console.log("2. Just select a, b, or c for the appropriate answer.\n");

var quizLevel1 = [
  {
    question: "Which one is Jethalal's favorite breakfast for Sundays?",
    options: "a: Jalebi Fafda\nb: Undhiyo\nc: Dhokla\n=> ",
    answer: "a"
  },
  {
    question: "Name of the bhojnalaya where Natu Kaka have food?",
    options: "a: Gujarati Bhojnalya\nb: Padmini Bhojnalaya\nc: Padmavati Bhojnalaya\n=> ",
    answer: "c"
  },
  {
    question: "Who is Jethalal's best friend?",
    options: "a: Aatmaram Bhide\nb: Tarak Mehta\nc: Krishnan Iyer\n=> ",
    answer: "b",
  }
];

var quizLevel2 = [
  {
    question: "Who is the working women among following?",
    options: "a: Anjali Mehta\nb: Komal Hathi\nc: Madhavi Bhide\n=> ",
    answer: "c"
  },
  {
    question: "Whenever Jethalal gets into trouble, He asks for help from someone. What does he call that person?",
    options: "a: Param Mitra\nb: Fire brigade\nc: Rakshak\n=> ",
    answer: "b"
  }
];
    
var quizLevel3 = [
  {
    question: "Which of the following is not a nickname given for any character by bapuji?",
    options: "a: ATM\nb: Bhindi Master\nc: Mehtoos\n=> ",
    answer: "a"
  },
  {
    question: "Fills up, 'Humara Naam Hai Chaalu Pandey, Jhooth Bologe Toh____'?",
    options: "a: Padenge Dandey\nb: Padenge Chaatey\nc: Padenge Ghuusey\n=> ",
    answer: "a"
  }
];

function play(question, options, answer){
  console.log(question);
  var userAnswer = readlineSync.question(options);
  console.log("You answered: " + userAnswer);

  if(userAnswer === answer){
    console.log("Right answer!");
    score = score + 2;
  }
  else{
    console.log("Wrong answer!");
  }

  console.log("\n");
}

for(var i = 0; i < quizLevel1.length; i++){
  play(quizLevel1[i].question, quizLevel1[i].options, quizLevel1[i].answer);
}
console.log("---- ---- ----");
console.log("You scored:", score);

if(score >= 6){
  console.log("Great! You can move to level 2.");
  console.log("---- ---- ----\n\n");
  for(var i = 0; i < quizLevel2.length; i++){
  play(quizLevel2[i].question, quizLevel2[i].options, quizLevel2[i].answer);
  }
}
else if(score < 6){
  console.log("Sorry! You cannot move to level 2.");
  console.log("---- ---- ----");
}

if(score >= 10){
  console.log("---- ---- ----");
  console.log("You scored:", score);
  console.log("Excellent! It's level 3 now.");
  console.log("---- ---- ----\n\n");
  for(var i = 0; i < quizLevel3.length; i++){
  play(quizLevel3[i].question, quizLevel3[i].options, quizLevel3[i].answer);
  }
}else if(score >= 6 && score < 10){
  console.log("---- ---- ----");
  console.log("You scored:", score);
  console.log("Sorry! You cannot move to level 3.");
  console.log("---- ---- ----");
}

var highScores = [
  {
    name: "Asit Modi",
    score: 14
  },
  {
    name: "Sandesh",
    score: 13
  }
];

if(score >= 10){
  console.log("YAY! You SCORED:", score); 
}
console.log("\nCheck out the high scores:");

for(var i = 0; i < highScores.length; i++){
  console.log(highScores[i].name + ":", highScores[i].score);
}
console.log("\nWin check:");

for(var i = 0; i < highScores.length; i++){
  if(score > highScores[i].score){
    console.log("Have you beaten " + highScores[i].name + "?", true);
  }
  else if(score < highScores[i].score){
    console.log("Have you beaten " + highScores[i].name + "?", false);
  }
  else{
    console.log("There is a tie between you and " + highScores[i].name + ".");
  }
}

console.log("\nThank you for playing...");