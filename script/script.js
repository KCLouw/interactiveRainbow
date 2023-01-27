let red =  document.getElementById("red");

function colorPicker(color){
    document.getElementById("red").style.background = color;
    document.getElementById("orange").style.background = color;
    document.getElementById("yellow").style.background = color;
    document.getElementById("green").style.backgroundColor = color;
    document.getElementById("blue").style.backgroundColor = color;
    document.getElementById("purple").style.backgroundColor = color;
    document.getElementById("violet").style.backgroundColor = color;
};