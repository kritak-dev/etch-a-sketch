const container = document.createElement('div');
container.classList.add('container');
let n = 3;
for (let i = 1; i <= n * n; i++) {
    let div = document.createElement('div');
    div.classList.add(`item_${i}`);
    container.appendChild(div);
}
container.setAttribute('style', `height: 500px; width: 500px; background-color: teal; display: grid; grid-template: repeat(${n}, 1fr) / repeat(${n}, 1fr)`);

const body = document.querySelector('body');
body.appendChild(container);

let allDiv = document.querySelector('.container').childNodes;
allDiv.forEach((div) => {
    div.addEventListener('click', function(evt) {
        evt.target.style.backgroundColor = 'red';
    });
});

