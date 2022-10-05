let beep = document.getElementById('beep'); // taking ID called beep from HTML div

for (i=1; i<=25; i++) { // this for loop says that the initial number is going to be one, and this will run 25 times. 

    if (i%3 == 0) { // if the number being displayed is divisible by three
        beep.innerHTML += "beep" + "<br>"; // then display beep instead of the number
    } else if (i%5 == 0) { // if the number being displayed is divisible by five
        beep.innerHTML += "bop" + "<br>"; // then display bop instead of the number

    } else if (i%3 == 0 && i%5 == 0) { // if the number is divisible by three AND five
        beep.innerHTML += "beepbop"+ "<br>"; // display both beep and bop  instead of the number
    } else { // if none of these cases are true
        beep.innerHTML += i + "<br>"; // just display the number
    }
}