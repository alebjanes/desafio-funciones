
function pintar(element, color) {
    element.style.backgroundColor = color;
}

const blueSquare = document.getElementById("azul");
const redSquare = document.getElementById("rojo");
const greenSquare = document.getElementById("verde");
const yellowSquare = document.getElementById("amarillo");

blueSquare.addEventListener("click", () => pintar(blueSquare, "black"));
redSquare.addEventListener("click", () => pintar(redSquare, "black"));
greenSquare.addEventListener("click", () => pintar(greenSquare, "black"));
yellowSquare.addEventListener("click", () => pintar(yellowSquare, "black"));

// 4.2

let colorGlobal = 'white';

document.getElementById('key').style.backgroundColor = colorGlobal;

function updateSquareColor() {
    document.getElementById('key').style.backgroundColor = colorGlobal;
}

function addSquare(color) {
    const newElement = document.createElement('div');
    newElement.style.width = '200px';
    newElement.style.height = '200px';
    newElement.id = 'key2';
    newElement.style.backgroundColor = color;
    document.body.appendChild(newElement);
}

document.addEventListener('keydown', function(event) {
    if(event.key === 'a') {
        colorGlobal = 'pink';
        updateSquareColor()
    } else if (event.key === 's') {
        colorGlobal = 'orange';
        updateSquareColor()
    } else if (event.key === 'd') {
        colorGlobal = 'lightblue';
        updateSquareColor()
    } else if (event.key === 'q') {
        addSquare('purple')
    } else if (event.key === 'w') { 
        addSquare('grey')
    } else if (event.key === 'e') { 
        addSquare('brown')
    }
})
