const container = document.createElement('div');
container.classList.add('container');
let n = 3;

function createGrid(n) {
    for (let i = 1; i <= n * n; i++) {
        let div = document.createElement('div');
        div.classList.add(`item_${i}`);
        container.appendChild(div);
    }
    
    container.style.display = 'grid';
    container.style.gridTemplate = `repeat(${n}, 1fr) / repeat(${n}, 1fr)`;
}

const body = document.querySelector('body');
body.appendChild(container);
const clear = document.createElement('button');
clear.classList.add('clear');
clear.textContent = 'Clear';

function changeColor() {
    let allDiv = document.querySelector('.container').childNodes;
    allDiv.forEach((div) => {
        div.addEventListener('mouseover', function(evt) {
            evt.target.style.backgroundColor = 'black';
        });
    });
}

function clearBoard() {
    document.querySelector('.container').childNodes.forEach((div) => {
        div.style.backgroundColor = 'white';
    });
    n = prompt('Enter a number', 16);
    createGrid(n);
    changeColor();
}

choices.addEventListener('click', function(evt) {
    let choice = evt.target.className;
    if (choice === 'clear') clearBoard();
    else changeColor();
});

const rainbow = document.createElement('button');
rainbow.classList.add('rainbow');
rainbow.textContent = 'Rainbow';
const gray = document.createElement('button');
gray.textContent = 'Gray';
gray.classList.add('gray');
const black = document.createElement('button');
black.classList.add('black');
black.textContent = 'Black';
const choices = document.createElement('div');
choices.classList.add('choices');
choices.appendChild(rainbow);
choices.appendChild(gray);
choices.appendChild(black);
choices.appendChild(clear);
body.appendChild(choices);

choices.addEventListener('click', function(evt) {
    console.log(evt);
});
