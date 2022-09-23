// Zaydee Dominguez-Chang
// 09/22/2022
// N220 Intro to Media Apps Lab 4


//starting objects for all rect() 
let LrectStart = { // starting LEFT rect
    x:50, y:150, width:100, height: 200, Lcolor: "#0099ff"
}

let RrectStart = { // starting RIGHT rect
x:650, y:150, width:100, height: 200,  Rcolor: "#cc99ff"
}
function setup () {
 //create canvas
 createCanvas(800,600);
 background(0);
}

function draw () {
   //creating LEFT blue rectangle (starting position)
    fill(LrectStart.Lcolor);
    rect(LrectStart.x, LrectStart.y, LrectStart.width, LrectStart.height);

    //creating RIGHT purple rectangle (starting position)
    fill(RrectStart.Rcolor);
    rect(RrectStart.x, RrectStart.y, RrectStart.width, RrectStart.height);

    //begin two if statements
    if (keyIsDown(UP_ARROW)) { // if the UP arrow is pressed
        LrectStart.y +=1; // blue/left rect moves down
        RrectStart.y -=1; // purple/right rect moves up
      }
    if (keyIsDown(DOWN_ARROW)) { // if the DOWN arrow is pressed
        LrectStart.y -=1; // blue/left rect moves up
        RrectStart.y +=1;// purple/right rect moves down
    }
}
