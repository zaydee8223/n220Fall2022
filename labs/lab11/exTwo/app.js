/*
Zaydee Dominguez-Chang
N220 Lab 11
Due 11/17/2022
*/

// variables to store rgb values, all will have the inital value of 0
let red = 0;
let green = 0;
let blue = 0;

document.getElementById("change-rgb").innerHTML = `${red},${green},${blue}`; // this will write the original rgb value (using the span tag to get the value)

/*BEGIN FUNCTIONS FOR RED BUTTONS */
function redOne(){ // this is the function for adding one value to red
red += 1; // hardcoding the increment value to just one

document.getElementById("colorBox").style.backgroundColor = "rgb("+red+","+green+","+blue+")"; // changing the style of the background to the new rgb value

document.getElementById("change-rgb").innerHTML = `${red},${green},${blue}`; // this will display the new rgb value
}

function redFive(){ // this is the function for adding five values to red
red += 5; //hardcoding the increment value to five
document.getElementById("colorBox").style.backgroundColor = "rgb("+red+","+green+","+blue+")"; // changing the style of the background to the new rgb value

document.getElementById("change-rgb").innerHTML = `${red},${green},${blue}`; // this will display the new rgb value
}

function redTen(){ // this is the function for adding ten values to red
red += 10; // this will hardcode increment the value of red by ten

document.getElementById("colorBox").style.backgroundColor = "rgb("+red+","+green+","+blue+")"; //changing the style of the background to the new rgb value
document.getElementById("change-rgb").innerHTML = `${red},${green},${blue}`; // this will display the new rgb value
}

/*BEGIN FUNCTIONS FOR GREEN BUTTONS */
function greenOne(){ // this is the function for adding one value to green
green += 1; // this will hardcode increment the value of green by one
    
    document.getElementById("colorBox").style.backgroundColor = "rgb("+red+","+green+","+blue+")"; //changing the style of the background to the new rgb value
    document.getElementById("change-rgb").innerHTML = `${red},${green},${blue}`; // this will display the new rgb value
}

function greenFive(){ // this is the function for the adding five values to green
green += 5; // this will hardcode increment the value of green by five
    
    document.getElementById("colorBox").style.backgroundColor = "rgb("+red+","+green+","+blue+")"; //changing the style of the background to the new rgb value
    document.getElementById("change-rgb").innerHTML = `${red},${green},${blue}`; // this will display the new rgb value
}

function greenTen(){ // this is the function for the adding ten values to green
    green += 10; // this will hardcode increment the value of green by ten
    
    document.getElementById("colorBox").style.backgroundColor = "rgb("+red+","+green+","+blue+")"; //changing the style of the background to the new rgb value
    document.getElementById("change-rgb").innerHTML = `${red},${green},${blue}`; // this will display the new rgb value
}

/*BEGIN FUNCTIONS FOR BLUE BUTTONS */
function blueOne(){ // this is the function for the adding one value to blue
    blue += 1; // this will hardcode increment the value of blue by one
    
    document.getElementById("colorBox").style.backgroundColor = "rgb("+red+","+green+","+blue+")"; //changing the style of the background to the new rgb value
    document.getElementById("change-rgb").innerHTML = `${red},${green},${blue}`; // this will display the new rgb value
}

function blueFive(){ // this is the function for the adding five values to blue
    blue += 5; // this will hardcode increment the value of blue by five
    
    document.getElementById("colorBox").style.backgroundColor = "rgb("+red+","+green+","+blue+")"; //changing the style of the background to the new rgb value
    document.getElementById("change-rgb").innerHTML = `${red},${green},${blue}`; // this will display the new rgb value
}

function blueTen(){ // this is the function for the adding ten values to blue
    blue += 10; // this will hardcode increment the value of blue by ten
    
    document.getElementById("colorBox").style.backgroundColor = "rgb("+red+","+green+","+blue+")"; //changing the style of the background to the new rgb value
    document.getElementById("change-rgb").innerHTML = `${red},${green},${blue}`; // this will display the new rgb value
}