//algorithm
// Create a setup function that has createCanvas to start off all projects 
// Drawing Drawer
// Create a drawingDrawer function 
// give it two arguments (x and y)
// Inside drawingDrawer, create whatever composition you'd like (using P5 functions) 
// All positional values for the individual p5 functions should relate to x and y arguments 
// instead of drawCircle (); drawCircle(10,10,5) can do drawCircle(x-10,y-10,5);
// create function draw (); invoke/ call function drawingDrawer (); have it follow MouseX and MouseY {drawingDrawer (MouseX, MouseY);}


// setup function with create canvas
function setup () {
createCanvas (400,600);

}


//function draw will invoke drawingDrawer and have its composition follow the mouse
function draw () {

    drawingDrawer (mouseX, mouseY); // follow the direction of the mouse

}


//function for exercise 
function drawingDrawer (x,y) {

    // draw a basic composition, in this case the most basic face
    circle (x,y, 40);
    circle(x-7, y-2, 5);
    circle(x+7, y-2, 5);
    square(x-10, y+10, 20);

}