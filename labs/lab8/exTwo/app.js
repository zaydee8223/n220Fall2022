//Zaydee N220 
//Due 10/27/2022
// Password Exercise


//function that will check the input boxes
function checkInput () {
var username = document.getElementById('username').value; // getting the value from the username input to ensure its the right value
var password = document.getElementById('password').value; // getting the value from the password input to ensure its the right value

let success = document.createElement('div'); // adding a div for the success text
document.body.appendChild(success); // adding success div onto the screen
let wrong = document.createElement('div'); // adding a div for the swrong information text
document.body.appendChild(wrong); // adding wrong div onto the screen

if ( (username == "Username") && (password == "Password")) { // if the username = username and password = password
    success.innerHTML+="Success!"; // display the string "success" to show they wrote the right thing
    success.style.color="green"; // change the color to green

} else { // if none of the information is correct
    wrong.innerHTML+="Wrong Information"; // display the string "wrong information" to show they did not write the right thing
    wrong.style.color="red"; // change the color to red
}
}