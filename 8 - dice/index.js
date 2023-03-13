'use strict'

const button = document.querySelector('.btnShuffle');
const diceImg = document.querySelector('.dice__img')

const rollDice = function() {
    let calc = Math.floor((Math.random() * 6) +1)
    diceImg.setAttribute("src", `dice-${calc}.png`)
}

button.addEventListener('click', function () {
    setTimeout(rollDice, 500);
    diceImg.setAttribute("src", `dice-roll.gif`)
});

















//icon을 이용해서 하려고 했음, 나중에 해보기
// const dice = ['one','two','three','four','five','six'];


// let curClassname = diceClass.className.split(' ')[1];
// // let firstCalss = `fa-solid fa-dice-one`;
// console.log(curClassname);

// button.addEventListener('click', function() {
//     let num = Math.floor(Math.random() * dice.length);

//     diceClass.classList.remove(curClassname);
//     let hi = diceClass.classList.add(`fa-dice-${dice[num]}`);
//     return curClassname = hi; //이 로직이면 스택처럼 쌓여감
// })


    
