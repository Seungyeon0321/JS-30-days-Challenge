'use strict'

const btn = document.querySelector('.switch');

const emojis = [];

const emojiAddFunction = async () => {

    let res = fetch('https://emoji-api.com/emojis?access_key=dbd8d32ab12a8c9c7b223a5a21ae2edb533350a1')
    res = res.json();


    for(let i = 0; i < res.length; i++) {
        emojis.push(res[i].character);
    }
}

emojiAddFunction();

console.log(emojis)

btn.addEventListener('mouseover', () => {
    btn.innerText = emojis[Math.floor(Math.random() * emojis.length)];
}); //여기서 legnth를 안 곱해주면 처음 mouseover했을 때 딱 한번만 선택된다.

btn.addEventListener('click', () => {
    btn.innerText = emojis[Math.floor(Math.random() * emojis.length)];
})