'use strict'

// const allBtn = document.querySelectorAll("button");
// const soundBtn = document.querySelector("#soundBtn");


// soundBtn.addEventListener('click', function () {
//     soundBtn.setAttribute('id', 'clickBtn');
// }
// );

//2/25 pracitce
const sounds = [1, 2, 3, 4, 5, 6];
const buttons = document.querySelector('#buttons')

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.innerHTML = sound;
    
    btn.addEventListener('click', () => 
    {document.getElementById(sound).play()}
    )

    buttons.appendChild(btn);
    }
)






//12/18
// const sounds = [1, 2, 3, 4, 5, 6];

// sounds.forEach((sound) => {
//     const btn = document.createElement("button");
//     btn.innerText = sound;

//     btn.addEventListener("click", () => {
//         document.getElementById(sound).play();
//     })

//     document.getElementById("buttons").appendChild(btn);
// })


// const sounds = ['1', '2', '3', '4', '5', '6']; //기존에 있던 ID값이랑 동일한 이름으로 해야지 아래 click 이벤트가 발생함 ㅋ

// sounds.forEach((sound) => {
//     const btn = document.createElement('button'); //이게 아예 태그를 만드는 거임
//     btn.classList.add('btn');

//     btn.innerText = sound;


//     btn.addEventListener('click', () => {
//         document.getElementById(sound).play();
//     });

//     document.getElementById('buttons').appendChild(btn); //이걸로 인해서 만들어오놈 buttons ID 안에 button 을 넣을 수 있다
// });