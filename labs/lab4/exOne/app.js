// Zaydee Dominguez-Chang
// 09/22/2022
// N220 Intro to Media Apps Lab 4

let fbody = { // this is an object for the body of the fish
    bodx: 260, body: 105, bodwidth: 270, bodheight: 150, fishColor: "#ff6f1d"
}

let ftail = { // this is an object for the tail of the fish
    x1: 90, y1: 20, x2: 200, y2: 100, x3: 100, y3:230, tailColor: "#ff6f1d"
}

let feyes = {// this is an object for the eyes of the fish
    x: 350, y: 90, width: 20, height: 20, eyeColor: "#000"
}

function setup() {

//    create canvas
    createCanvas (800,600);
   
}

function draw () {
   // function draw is invoking the three functions that make up the fish 
    drawBody();
    drawTail();
    drawEyes();
    
}


// creates indivdual parts of the fish with functions
function drawBody (fbodyObject) { // creates body
    noStroke();
   fill(fbody.fishColor);
   ellipse(fbody.bodx, fbody.body, fbody.bodwidth, fbody.bodheight);
}

function drawTail(ftailObject) { // creates tail
    noStroke();
    fill(ftail.tailColor);
triangle(ftail.x1,ftail.y1, ftail.x2, ftail.y2, ftail.x3, ftail.y3);
} 

function drawEyes(feyesObject) { // creates eye
    fill(feyes.eyeColor);
    ellipse(feyes.x, feyes.y, feyes.width, feyes.height);
}
