'use strict'

const password = document.querySelector('.box2');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    
    let password1 = [];    
    
    for (let i = 0; i < 17; i++) {
        let value = Math.floor(Math.random() * 58) + 65;
        let randomLetter = String.fromCharCode(value);
        password1.push(randomLetter);
    }
    
    let password2 = password1.join('');
    password.innerHTML = password2

})
