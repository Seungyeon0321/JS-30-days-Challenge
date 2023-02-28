'use strict'

const btnRefresh = document.querySelector('.button__refresh');
const btnReverse = document.querySelector('.button__reverse');
const boxes = document.querySelectorAll('.box');

let randomColor = function() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

function color() {
    boxes.forEach((e) => {
    let color = e.style.backgroundColor = '#' + randomColor();
    e.innerHTML = color; 
    })
  }

color();

btnRefresh.addEventListener('click', color);

//처음에도 이렇게 색깔을 표시하는 법
