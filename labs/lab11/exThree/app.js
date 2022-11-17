/*
Zaydee Dominguez-Chang
N220 Lab 11
Due 11/17/2022
*/

function showAnswer(answer) { // this function passes a parameter of answer to get the answer from HTML
    var answerType = answer.getAttribute("data-answer-type"); // getting the data attribute of get-answer-type with the variable answer type
    QandA.innerHTML = "The answer is " + answerType + "."; // changing the div called QandA's HTML to display the correct answer of each flash card
  }