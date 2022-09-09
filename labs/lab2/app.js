// Zaydee Dominguez-Chang
// 09/08/2022
// N220 Intro to Media Apps Lab 2

// EXERCISE ONE - COUNTER ALGORITHM 
// ---------------------------------
// Create a variable that beings with zero 
// no setup needed- maybe function draw?
// has to appear in console.log
// console.log has to display variable i and continuously add - ++

// EXERCISE TWO - WORLD WRAP
// -------------------------
// basic setup function for this assignment 
// create a canvas 800x600 
// create a very basic circle with a radius of 25
// create a variable for the x position of the circle and for a radius to make things easier
// declare a value for the x position and give it a color 
// in function draw(). give the background a color 
// add 5 pixels per frame to its x position so movement is visible 
// create a way for the circle to go all the way to the left once it reaches the very right
// would have to use modulous for this, because the remainder would allow it to go all the way to the left hand side


// variables
var i=0; // sets initial integer number to zero   
var circleX; //current x position of the circle for exercise 2 
var radius=25; //radius of the circle for exercise 2


function setup() {
    //creating a 800x600 canvas
    createCanvas(800,600);
    //assigning 0 as x coordinate of the circle
    circleX=0;
    //using red as fill color
    fill("aqua");
    
  } 
function draw() {
    // console log for number increase 
    console.log(i++);
      //using gray background for the second exercise
  background("grey");
  //drawing a circle
  circle(circleX, height/2, radius*2);
  //adding 5 to the x value of circle and if it reaches width (800), wrapping
  //around from 0. so that circle will appear on far left when it reaches far right
  circleX=(circleX+5)%width
}
