let bestTimes = [36, 55, 198]; // creating an array with the "best time" numbers, from lowest to highest

let bestOne = document.getElementById('bestOne');// getting the first div that will display the bigger number
let bestTwo = document.createElement('div'); // adding a div for the second number
let bestThree = document.createElement('div'); // adding a div for the third number

bestOne.innerHTML += bestTimes[2]; // display the greatest number in the first div

document.body.appendChild(bestTwo); // adding that bestTwo new div onto the screen
bestTwo.innerHTML+= bestTimes[1]; // display the second runner up number in second div


document.body.appendChild(bestThree); // display that bestThree new div onto the screen
bestThree.innerHTML += bestTimes[0]; // display the last number in the third div