//make loop to create a 16x16 grid of square divs
const container = document.getElementById('container');

let gridSize = 16;

makeGrid();
etch();

const body = document.querySelector('body');
const reset = document.createElement('button');
const buttonDiv = document.createElement('div');

buttonDiv.classList.add('button-container');

body.insertBefore(buttonDiv, container);
buttonDiv.appendChild(reset);

reset.innerText = 'Reset';

reset.addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.style.backgroundColor = 'white';
        box.remove();
    });
    gridSizePrompt();
    makeGrid();
    etch();
});

const box = document.querySelector('.box');
let color = window.getComputedStyle(box);
color = color.getPropertyValue('background-color');
let alpha = .1

function gridSizePrompt() {
    do {
    gridSize = prompt('Size of grid')
    gridSize = parseInt(gridSize);
    } while (gridSize > 100);
}

function makeGrid() {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (i = 0; i < (Math.pow(gridSize, 2)); i++) {
        container.insertAdjacentHTML("afterbegin", "<div class='box'></div>")
}
}
//add hover listener to each box
function etch() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        let a = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        let c = Math.floor(Math.random()*255);
        color = window.getComputedStyle(box);
        color = color.getPropertyValue('background-color');
        if (color === 'rgb(255, 255, 255)') {
         alpha = 0.1;
         box.style.backgroundColor = 'rgb(' + [a,b,c].join(',') + ')';
        } else {
         alpha += 0.1;
         alpha.toString;
         box.style.backgroundColor = `rgba(0, 0, 0, ${alpha})`;
        }
        if (color === 'rgba(0, 0, 0, 1)') {
            alpha = 1;
        }
    });
});
}
