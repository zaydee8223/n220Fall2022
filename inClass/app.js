let mouseVal = { x: 0, y: 0 }; // maps the values of x and y each to zero
// changed aou to mouseVal to make variable more specific 


// setup function that creates a 400x400 canvas
function setup() {
  createCanvas(400, 400);
}


// draw background with a gray color to it
function draw() {
  background(220);
  

// if the mouse is being pressed, map the x and y values to match coordinates; no line is being drawn
  if(mouseIsPressed) {
    mouseVal.x = mouseX;
    mouseVal.y = mouseY;
  }
  
  let zah = distance( mouseVal, { x: mouseX, y: mouseY }); // catch the distance between the canvas, it is being invoked from the function distance() below
  
//    console.log(zah);

  if(zah > 120)  { // missing opening curly bracket
    stroke(194);
  } 
  else {  // no if needed, only else
    stroke(0); // missing end double quotes
  }
  
  line(mouseVal.x, mouseVal.y, mouseX, mouseY); // mispelled word (mouse instead of moose, missing comman btwn mouseVal.y and mouseX)
}

function distance(p1, p2) {
  
  let dx = p1.x - p2.x;
  let dy = p1.y - p2.y;
  
  //return the distance
   Math.sqrt(dx*dx + dy*dy);
}

