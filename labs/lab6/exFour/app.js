let favs = ["Eric Nam", "Fried Rice", "Bad Bunny", "Concerts", "Road Trips" ]; // this is an array with some of my favorite things / people
let favoriteThings = document.getElementById('favoriteThings'); // this is getting that ID called favoriteThings from the HTML div

for (i=0; i<favs.length; i++) { // this for loop will  display whatever the length of the favs array is, adding for as long as the array is

    favoriteThings.innerHTML += favs[i] + " " + "is one of my favorite things." + "<br>"; // this will display each of my strings in the array with the sentence "is one of my favorite things" on the page.
}