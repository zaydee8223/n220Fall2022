//Zaydee Dominguez-Chang
//N220 Lab 10
//Due 11/10/2022

let badwords = ["clear", "water", "tires"]; // array that contains the three bad words 
let count; // this is what will count the bad words on the input

function checkBadWords() {
    count = 0; //inital bad word count should be zero (no bad words found in the beginning)

    let badWord = ""; //sentence variable for now should not contain anything
    badWord = document.getElementById('badWord').value;  // getting the ID badWord from the input field in HTML 
    let words = []; // getting an array called words and leaving it empty FOR NOW
    words = badWord.split(" "); // this is going to break up the sentence when there are blanks in between (when there are spaces)

    for (let i = 0; i< badwords.length; i++) { // this is looping through the BADWORDS array
       
        for(let j = 0; j < words.length; j++) { // this is looping through the WORDS array

            if (words[j] == badwords[i]) { // if there is a bad word present 
                count++; // increase the "tally" of bad words
            }
        }
    }
    
    if (count == 0) { // if there are no bad words at all
        document.getElementById('badwordDisplay').innerHTML = "No bad words found."; // go into the badwordDisplay ID and display this message

    } else { // if there are any bad words 
        document.getElementById('badwordDisplay').innerHTML = "Bad word found. Total bad words found: " + count; // go into the badwordDisplay ID and display message with the tally
    }

    badWord = document.getElementById("badWord").value = ""; // erase the sentence inside of the input 

}