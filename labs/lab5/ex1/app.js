// Zaydee Dominguez-Chang
// 09/29/2022
// N220 Intro to Media Apps Lab 5

function changeSize() {
    var dvBox = document.getElementById('dvBox');
    //getting the width from the div and increasing 10% , adding px to it. 
    var div_width = dvBox.offsetWidth + (0.1 * dvBox.offsetWidth)+"px";
    //getting the height from the div and increasing 10% , adding px to it.
    var div_height = dvBox.offsetHeight + (0.1 * dvBox.offsetHeight)+"px";
    //Setting the width of div to new div_width
    dvBox.style.width = div_width;
    //Setting the height of the div to new div_height
    dvBox.style.height = div_height;
   

}