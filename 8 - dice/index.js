'use strict'
const button = document.querySelector('.btnShuffle');
const diceClass = document.getElementById('myClass')

const dice = ['one','two','three','four','five','six'];


let curClassname = diceClass.className.split(' ')[1];
// let firstCalss = `fa-solid fa-dice-one`;
console.log(curClassname);

button.addEventListener('click', function() {
    let num = Math.floor(Math.random() * dice.length);

    diceClass.classList.remove(curClassname);
    let hi = diceClass.classList.add(`fa-dice-${dice[num]}`);
    return curClassname = hi; //이 로직이면 스택처럼 쌓여감
})
