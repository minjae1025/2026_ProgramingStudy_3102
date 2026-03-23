const btnIncrement = document.getElementById("increment");
const btnDecrease = document.getElementById("decrease");
const numText = document.getElementById("number");
let count = 0;

btnIncrement.addEventListener('click', () => {
    count++;
    numText.innerHTML = count;
})

btnDecrease.addEventListener('click', () => {
    count--;
    numText.innerHTML = count;
})