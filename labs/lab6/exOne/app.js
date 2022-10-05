let bigLoop = document.getElementById('bigLoop'); // getting that ID called bigLoop from the HTML div

for (i=1; i<=5; i++) { // for loop that assigns initial number to one, cannot contain more than 5 numbers in this loop
    bigLoop.innerHTML += (i*1000) + " "; // will take numbers 1-5, multiply by 1000, and display with a space in the end.
}
