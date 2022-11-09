//Zaydee Dominguez-Chang
//N220 Lab 10
//Due 11/10/2022

function justAverage() {
    var numbers = document.getElementById('numbers').value; // getting the submit button id from HTML and whatever values are in the input
    var numSep = numbers.split(","); // let the program know that the comma is what separates different numbers from each other
    var sum = 0; // setting the initial variable of sum to 0
    var avg = 0; // setting the inital variable of avg to 0

    for(i=0;i<numSep.length;i++){ // looping through the array that will be created
        sum += parseInt(numSep[i]); // add the amount of numbers in the array to get the sum of the numbers
    }

    avg=sum/numSep.length; // the new avg variable will divide the sum and the length of the array
    document.getElementById("numSum").innerHTML = "Sum: "+ sum; // getting the ID called numSum and implementing the sum of the numbers there
    document.getElementById("numAvg").innerHTML = "Average: "+ avg; // getting the ID called numAvg and implementing the average of the numbers there
    var numbers = document.getElementById("numbers").value=""; // erasing the value put in the input box
    
}