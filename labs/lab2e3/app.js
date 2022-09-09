// Zaydee Dominguez-Chang
// 09/08/2022
// N220 Intro to Media Apps Lab 2

// EXERCISE Three - Puck Side
// -------------------------
// basic setup function for this assignment 
// create a canvas 400x300
// create a variable with one singular diameter for BOTH circles
// give a very noticeable background color so it is able to be seen
// create an if statement (IF THE MOUSE IS IN AN AREA BIGGER THAN ABOUT HALF OF THE CANVAS (200), THEN ALLOW A RED CIRCLE WITH A DIAMETER OF 20 FOLLOW IT, IF IT IS LESS, THEN CHANGE ITS COLOR TO BLUE AND ALLOW THE CIRCLE TO FOLLOW IT WITH SIMILAR DIAMETER)

var diameter = 20; //variable that gives the same diameter for both blue and red circles
function setup() {
    // creates a canvas 400x300
    createCanvas(400, 300);
    }
    
    
    function draw() {
    background("yellow"); //giving it an easier background color
    
    if(mouseX>200)
    {
    fill("red");
    circle(mouseX,mouseY,diameter); //a red circle with a diameter of 20 follow right side of the canvas
    }
    else
    {
    fill("blue");
    circle(mouseX,mouseY,diameter); // a blue circle with a diameter of 20 follow left side of a canvas
    }
    }
