//Zaydee Dominguez-Chang
//N220 Lab 10
//Due 11/10/2022

function createDiv(object) { // this function takes care of creating the divs the objects show up in and has styling

     var newdiv = document.createElement("div"); // creating a new div with var newdiv
     newdiv.innerText = "I am a new div with color."; // the text that appears in the div
     newdiv.style.width = object.width; // the width of newdiv will be the object's width
     newdiv.style.height = object.height;// the height of newdiv will be the object's height
     newdiv.style.background=object.color; // the bground color of newdiv will be the object's bground color
     document.body.appendChild(newdiv); // making newdiv appear on the screen

  }
  
  function colorDivs() { // this function is what the onclick on the button will use and see

  let objects = [ // this array has three objects with a color, height, and width
   { color: "#FF0000", height: 100, width: 300 }, // obj 1
   { color: "#FFFF00", height: 200, width: 200 }, // obj 2
   { color: "#ff0000", height: 300, width: 100 }, // obj 3
  ];
  
  for(i=0;i<objects.length;i++) {// looping through the objects array for however many objects are inside
    createDiv(objects[i]); // will create that div with its respected color, height, and width
 } 
  
  }
  