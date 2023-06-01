const inputBox = document.querySelector(".input");
const btn = document.querySelector(".btn");
const checker = document.querySelector(".checker");
const card = document.querySelector(".Card");

const vowel = ["a", "i", "o", "e", "u", "A", "I", "O", "E", "U"];

vowelCheckerHandler = (e) => {
  e.preventDefault();

  const inputValue = inputBox.value.split("");
  const filteredVowel = inputValue.filter((v) => vowel.includes(v));

  // let html = `<div class="checker">${inputValue.join("")} has ${
  //   filteredVowel.length
  // } vowels</div>`;

  // card.insertAdjacentHTML("beforeend", html);

  checker.innerHTML = `${inputValue.join("")} has ${
    filteredVowel.length
  } vowels`;

  inputBox.value = " ";
};

btn.addEventListener("click", vowelCheckerHandler);
