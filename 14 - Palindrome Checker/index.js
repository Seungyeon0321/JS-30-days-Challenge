const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const checker = document.querySelector(".checker");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const inputValue = input.value;

  inputValue === inputValue.split("").reverse().join("")
    ? (checker.innerHTML = `${inputValue} is a palindrome`)
    : (checker.innerHTML = `${inputValue} is not a palindrome`);
});
