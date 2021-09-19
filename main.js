const cookie = document.querySelector('#cookie');
const num = document.querySelector('#num');
const title = document.querySelector('#tit');
let counter = 0;
let cookieclick = 1;

// adds the number of cookies on click
cookie.addEventListener('click', add);

function add() {
    counter += 1;
    num.textContent = counter;
    title.textContent = `${counter} cookies`;
}

// shows the number of cookies u get per click where u click on the cookie
cookie.addEventListener('click', showClick);

function showClick(e) {
    let x = e.pageX + 'px';
    let y = e.pageY + 'px';
    const section = document.getElementById('section');
    let element = document.createElement('p');
    let text = document.createTextNode(`+${cookieclick}`);
    element.style.top = y;
    element.style.left = x;
    element.setAttribute('id', 'add');
    element.appendChild(text);
    section.appendChild(element);
    console.log(x);
}
