const cookie = document.querySelector('#cookie');
const num = document.querySelector('#num');
const title = document.querySelector('#tit');
let counter = 0;
cookie.addEventListener('click', add);

function add() {
    counter += 1;
    num.textContent = counter;
    title.textContent = `${counter} cookies`;
}
