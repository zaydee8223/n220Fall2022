//Zaydee Dominguez-Chang
//N220 Lab 9
// Due 11/03/2022

function randomNum() {
    let randResult = document.getElementById('randResult'); // getting the  ID from HTML

    const genNum = Math.floor(Math.random() * 10); // this will generate a random number between 0 and 10. The number will be whole
    
    randResult.innerHTML = genNum;// will output the random number that genNum generates
}