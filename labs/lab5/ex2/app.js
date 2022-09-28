// Zaydee Dominguez-Chang
// 09/29/2022
// N220 Intro to Media Apps Lab 5

function newColor() {// function that will change the box color to blue when the mouse hovers over it
    let colorBox = document.getElementById("colorBox"); // naming this the exact name of the id in html
    colorBox.style.backgroundColor = "black";
}


function defaultColor () { // function that will change the box color back to its default color when mouse does not hover over it
    colorBox.style.backgroundColor = "blue";
}