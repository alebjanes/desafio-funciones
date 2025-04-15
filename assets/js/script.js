// Ejercicio 3

function pintar(element, color = "green") {
    element.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", () => pintar(ele, "yellow"))