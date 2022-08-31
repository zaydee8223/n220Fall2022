// Zaydee Dominguez-Chang
// 08/31/2022
// N220 Intro to Media Apps Lab 1

function setup() {

    // variables
   var bground = "#81b3f0";
   var sun = "#d8e05c";
   var tire = "#fff";

//    create canvas
    createCanvas (800,600);
    noStroke();
    background(bground);
    
    // very basic sun
    fill(sun);
    circle(70, 70, 50);

 // car tire in back 
 fill(tire);
 stroke("#000");
 strokeWeight(10);
 circle(490,490, 20);

//  tire 2 in the back
fill(tire);
stroke("#000");
strokeWeight(10);
circle(290,490, 20);

    // car portions
    fill("#000");
    noStroke();
    rect(175, 400, 350, 90);
    rect(450, 430, 100, 60);

    // tire in front
    fill(tire);
    stroke("#000");
    strokeWeight(10);
    circle(430,490, 20);

    // add another tire
    fill(tire);
    stroke("#000");
    strokeWeight(10);
    circle(230,490, 20);
    
    // fake car window
    fill(bground);
    noStroke();
    square(480, 410, 25);
    

    // very basic grass 
    fill("#4ca33c");
    noStroke();
     rect(300, 510, -800, 90);
     rect(300, 510, 800, 90);
   
}