//Zaydee N220 
//Due 10/27/2022
// Guessiing Game

//function to guess the number of the game
function guessNumber () {
    var numberguess = document.getElementById('numberguess').value; // gets the ID numberguess and when clicked the value of the input goes away
    var correctNumber = 10; // this is the right number

    //div for the right number
    let rightNum = document.createElement('div'); // adding a div for the right number text
    document.body.appendChild(rightNum); // adding right number div onto the screen

    //div for a number too low
    let lowNum = document.createElement('div'); // adding a div for a number too low
    document.body.appendChild(lowNum); // adding low num onto the screen
    
    //div for a number too high
    let highNum = document.createElement('div'); // adding a div for a number too low
     document.body.appendChild(highNum); // adding low num onto the screen


    if (numberguess == correctNumber) { // if the user guesses the right number
        rightNum.innerHTML += "You have guessed the right number!"; // this text will display
        rightNum.style.color = "green"; // change the text to green
     numberguess = document.getElementById('numberguess').value = ''; // delete the input that is in the input box

    } else if (numberguess < correctNumber) { // if the user guesses a number too low
        lowNum.innerHTML+= "The number is too low. Try again." // this text will display
        lowNum.style.color = "red"; // change the text to red
        numberguess = document.getElementById('numberguess').value = ''; // delete the input that is in the input box

    } else if (numberguess > correctNumber) {  // if the user guesses a number too high
        highNum.innerHTML+= "The number is too high. Try again." // this text will display
        highNum.style.color = "red"; // change the text to red
        highNum.style.fontWeight = "bold"; // change the text to bold
        numberguess = document.getElementById('numberguess').value = ''; // delete the input that is in the input box

    } 
}