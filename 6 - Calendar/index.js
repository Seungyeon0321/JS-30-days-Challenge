'use strict'

const table = document.querySelector('.days2');

const createDate = function () {

    for (let i = 31; i >= 1; i--) {
        let html = `<td class="days__day">${i}</td>`
        
        table.insertAdjacentHTML("afterbegin", html)
        
    }
}

createDate();
