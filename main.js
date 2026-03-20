// const number = document.getElementById('number');
// const plusButton = document.getElementById('plus');
// let count = parseInt(number.textContent);

// plusButton.addEventListener('click', () => {
//     count++;
//     number.textContent = count;
// });

// HTML -> JS
const resultH1 = document.getElementsByTagName('h1')[0];
// const resultH1 = document.querySelectorAll('h1')[0];
const plusButton = document.getElementsByTagName('button')[0];
// const plusButton = document.querySelectorAll('button')[0];

let count = 0;

// plusButton.addEventListener('click', () => {
//     count++;
//     resultH1.textContent = count;
// });

plusButton.onclick = () => {
    count++;
    resultH1.textContent = count;
};
