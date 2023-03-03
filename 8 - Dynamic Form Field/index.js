'use strict'

const boxes = document.querySelector(".boxes"),
btnAdd = document.querySelector(".add"),
btnRemove = document.querySelector(".remove");

btnAdd.addEventListener('click', () => {
    const html = `<input id ="input" type="text">`

    boxes.insertAdjacentHTML('beforeend', html);
})

btnRemove.addEventListener('click', () => {
    const boxesContainer = document.querySelector(".boxes")
    const input = boxesContainer.lastElementChild;
    
    input.remove();
})


