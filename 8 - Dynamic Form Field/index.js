'use strict'

const boxes = document.querySelector(".boxes"),
btnAdd = document.querySelector(".add"),
btnRemove = document.querySelector(".remove");

btnAdd.addEventListener('click', () => {
    const html = `<input id ="input" type="text">`

    boxes.insertAdjacentHTML('beforeend', html);
})

btnRemove.addEventListener('click', () => {
    const input = boxes.lastElementChild;
    
    input.remove();
})


