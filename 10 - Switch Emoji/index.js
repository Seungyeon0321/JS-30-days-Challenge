'use strict'

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
 