'use strict'

const reset = document.querySelector('.reset');
const save = document.querySelector('.save');
const numbers = document.querySelector('.numbers');
const btnPlus = document.querySelector('.plus');
const btnMinus = document.querySelector('.minus');
const showNumber = document.querySelector('.showNumber');
const savedNumbers = document.querySelector('.numbers');
const NumbersSave = document.querySelector('.NumbersSave');

let count = 0; //밸류에 집착하지 말고 그냥 그 숫자 자체를 innerHTML에 넣었으면 됐었다
btnPlus.addEventListener('click', () =>{ 
    count++
    showNumber.innerHTML = count;
 }
)

btnMinus.addEventListener('click', () =>{  
    count--
    showNumber.innerHTML = count;
 }
)

let savedNumbersLists = []

reset.addEventListener('click', () => {
    count = 0;
    showNumber.innerHTML = count;
})

save.addEventListener('click', () => {
    let targetNumber = showNumber.innerHTML;
    let html = `<span class="savedNumbers">${targetNumber}</span>`

    NumbersSave.insertAdjacentHTML('beforeend', html);
})

