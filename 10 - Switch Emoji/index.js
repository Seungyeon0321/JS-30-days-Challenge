'use strict'

<<<<<<< HEAD
const button = document.querySelector('.boxForEmoji')

const emojis = [];

const loadEmoji = async function () {

    let res = await fetch('https://emoji-api.com/emojis?access_key=59ce5dc0ac29b1ba551ef5aaf81529fa54151f19');
    let data = await res.json()

    for(let i of data) emojis.push(i);
}

loadEmoji();

button.addEventListener('mouseover', () => {
    button.innerHTML = emojis[Math.floor(Math.random() * emojis.length)].character;
    }
);
 
=======
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
>>>>>>> bc694274faaa755cbf82e95c0c7a59c67949b802
