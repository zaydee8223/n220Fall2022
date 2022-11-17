/*
Zaydee Dominguez-Chang
N220 Lab 11
Due 11/17/2022
*/

function newColor(blocks){ // newColor div that triggers the onclick function with the parameter called blocks which takes in the argument in the onclick 
    var blocks = document.getElementById(blocks.id); // getting each of the blocks element by its unique ID
    blocks.style.backgroundColor = blocks.dataset.color; // setting the background color of each different block to its DATASET color in HTML
}