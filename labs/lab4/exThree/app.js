
let wrapCircle = {
    x:0, radius: 25, height: 300, newRad: 50, newX: 5, circleFill: "#00FFFF"
}

function setup() {
    //creating a 800x600 canvas
    createCanvas(800,600);
   
    
  } 
function draw() {
    // console log for number increase 

      //using gray background for the second exercise
  background("grey");
  //drawing a circle with the object 
  fill(wrapCircle.circleFill);
  circle(wrapCircle.x, wrapCircle.height, wrapCircle.newRad);
  //moving the circle five px so when it reaches the width of 800, wraps back to the beginning
  wrapCircle.x=(wrapCircle.x + wrapCircle.newX)%width
}