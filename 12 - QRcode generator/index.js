'use strict'

let selectedQRcode = document.getElementById('qrcode');
let generatedButton = document.querySelector('.genbtn')
let elText = document.querySelector("#text");

let qrCode = new QRCode(selectedQRcode, 'www.naver.com');
console.log(qrCode);

generatedButton.addEventListener('click', function(e) {
    
    e.preventDefault();

    let website = elText.value;

    if(website) 
    {   selectedQRcode.innerHTML = '';
        new QRCode(selectedQRcode, website)
    }
    else 
    {alert('Please put the url with the qrcode')};

    elText.value = '';

})

// console.log(webAddress);

// $("#text").
//   on("blur", function () {
//     makeCode();
//   }).
//   on("keydown", function (e) {
//     if (e.keyCode == 13) {
//       makeCode();
//     // }
//   });