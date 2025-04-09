// Ejercicio 2

function pintar(element, color = "green") {
    element.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
ele ? ele.addEventListener("click", () => pintar(ele, "yellow")) : ""


// 3.2

console.log("Script is running");

const blueSquare = document.getElementById("azul");
const redSquare = document.getElementById("rojo");
const greenSquare = document.getElementById("verde");
const yellowSquare = document.getElementById("amarillo");

blueSquare.addEventListener("click", () => pintar(blueSquare, "black"));
redSquare.addEventListener("click", () => pintar(redSquare, "black"));
greenSquare.addEventListener("click", () => pintar(greenSquare, "black"));
yellowSquare.addEventListener("click", () => pintar(yellowSquare, "black"));