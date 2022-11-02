//Zaydee Dominguez-Chang
//N220 Lab 9
// Due 11/03/2022


function orderString () {
    
   let myArray = ["Home", "About" , "Contact"]; // creates an array with three elements

   if (event.target.id == "one") { //if the button ID is equal to one
    let stringResult = document.getElementById('stringResult'); // gt the stringResult ID from the HTML
    stringResult.innerHTML = myArray[0]; // display index 0 from the array 

   } else  if (event.target.id == "two") { // if the button ID is equal to two
    let stringResult = document.getElementById('stringResult'); // get the stringResult ID from the HTML
    stringResult.innerHTML = myArray[1]; // display index 1 from the array

} else if (event.target.id == "three") { // if the button ID is equal to three
    let stringResult = document.getElementById('stringResult'); // get the stringResult ID from the HTML
    stringResult.innerHTML = myArray[2]; // display index 2 from the array
}
}