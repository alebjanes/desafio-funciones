// Ejercicio 3

function pintar(event, color = "green") {
    const element = event.target;
    element.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", function(event) {
  pintar(event, 'yellow');
});