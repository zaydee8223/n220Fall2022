//algorithm
// Red Remover
// Create redRemover() function
// give redRemover an argument representing a color rgb(170, 200, 150)
// create a new variable that is using the setRed in function 
// Initialize it as the new color without a red component, which would be the setRed function wanting to be called 
// return that new color without it having a red component come out 
// Test this new function in the draw function using a component of some sort (example uses a circle)


// setup function with create canvas
function setup () {
    createCanvas (400,600);

    let firstColor = color(170,200,150);
    
    }
    
    
    //function draw will invoke drawingDrawer and have its composition follow the mouse
    function draw () {
    colorPicker();
       
    
    }
    
    
    //function for exercise 
  function colorPicker (firstColor) {
   let noRed = removeRed(firstColor);
   fill(noRed);

   //circle 
   circle(50, 50, 25);
  }

  function removeRed() {
    firstColor.setRed(0);
  }