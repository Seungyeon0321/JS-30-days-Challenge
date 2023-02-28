'use strcit'

const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const night = document.querySelector('.am__pm');

function clock() {

    const date = new Date();
    const setHour = String(date.getHours()).padStart(2, "0");
    const setMin = String(date.getMinutes()).padStart(2, "0");
    const setSec = String(date.getSeconds()).padStart(2, "0");

    setHour > 12 ? night.innerHTML = "PM" : night.innerHTML = "AM"

    hour.innerHTML = setHour;
    min.innerHTML = setMin;
    sec.innerHTML = setSec;

};

setInterval(clock, 1000);
