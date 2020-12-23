const container = document.createElement('div');
container.classList.add('container');
let n = 3;

function createGrid(n) {
    let remove = container.querySelectorAll('div');
    remove.forEach(div => div.remove());
    for (let i = 1; i <= n * n; i++) {
        let div = document.createElement('div');
        div.classList.add(`item_${i}`);
        container.appendChild(div);
    }
    
    container.style.display = 'grid';
    container.style.gridTemplate = `repeat(${n}, 1fr) / repeat(${n}, 1fr)`;
}
createGrid(n);

const body = document.querySelector('body');
body.appendChild(container);
const clear = document.createElement('button');
clear.classList.add('clear');
clear.textContent = 'Clear';

function changeColor(choice) {
    let allDiv = document.querySelector('.container').childNodes;
    if (choice === 'black') {
        container.classList.add('blackcolor');
        container.classList.remove('rainbowcolor');
    } else {
        container.classList.add('rainbowcolor');
        container.classList.remove('blackcolor');
    }
    allDiv.forEach((div) => {
        div.addEventListener('mouseover', function(evt) {
            if (choice === 'black') {
                evt.target.style.backgroundColor = 'black';
            } else if (choice === 'rainbow') {
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                let rgb = `rgb(${r}, ${g}, ${b})`;
                evt.target.style.backgroundColor = rgb;
            }
        });
    });
}

function clearBoard(color) {
    document.querySelector('.container').childNodes.forEach((div) => {
        div.style.backgroundColor = 'white';
    });
    n = prompt('Enter a number', 16);
    createGrid(n);
    if (color === "") color = 'black';
    changeColor(color);
}

const rainbow = document.createElement('button');
rainbow.classList.add('rainbow');
rainbow.textContent = 'Rainbow';
const black = document.createElement('button');
black.classList.add('black');
black.textContent = 'Black';
const choices = document.createElement('div');
choices.classList.add('choices');
choices.appendChild(rainbow);
choices.appendChild(black);
choices.appendChild(clear);
body.appendChild(choices);

choices.addEventListener('click', function(evt) {
    let choice = evt.target.className;
    let classes = container.classList;
    let color = "";
    if (classes.contains('blackcolor')) color = 'black';
    if (classes.contains('rainbowcolor')) color = 'rainbow';
    if (choice === 'clear') clearBoard(color);
    else changeColor(choice);
});
