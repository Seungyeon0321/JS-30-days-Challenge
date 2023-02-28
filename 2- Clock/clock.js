'use strict'

const deg = 6;
const hr = document.querySelector('.hr');
const mn = document.querySelector('.mn');
const sc = document.querySelector('.sc');

setInterval(() => {
   let day = new Date();
   
    //setting the actual seconds minutes and hour in clock

   let ms = day.getMilliseconds() * deg;
   let hh = day.getHours() * 30;
   let mm = day.getMinutes() * deg;
   let ss = day.getSeconds() * deg + ms / 1000 ;

    console.log((hh) + (mm /12));

   //changing the degree in the style as per the time

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
   
}, 1000);