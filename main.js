const button = document.querySelector('#click');
const num = document.querySelector('#num');
let counter = 0;
button.addEventListener('click', add);

function add() {
    counter += 1;
    num.textContent = counter;
}
