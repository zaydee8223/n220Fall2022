//Zaydee Dominguez-Chang
//N220 Lab 9
// Due 11/03/2022


function divisSeven () {
    let numberDivis = document.getElementById('numberDivis').value; // getting the value of the numberDivis ID

    if (numberDivis % 7 == 0) { // if the number in the input box is divisble by seven
        document.getElementById('result').innerHTML= "This number is divisble by 7";// tell the users in the result ID that the number can be divisible by 7

        return true; // return the statement to be true

    } else { // if the number is not divisible by seven
        document.getElementById('result').innerHTML = "This number is not divisble by 7";// tell the users in the result ID that the number cannot be divisible by 7

        return false; // return the statement to be false

    }

}