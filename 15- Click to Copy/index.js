const btn = document.querySelector(".btn");
const input = document.querySelector("input");

const btnHandler = (e) => {
  e.preventDefault();

  //there are 2 ways to copy the text on the input element
  navigator.clipboard.writeText(input.value).then(() => {
    btn.innerHTML = "Copped";
    setTimeout(() => {
      btn.innerHTML = "Copy";
    }, 2000);
  });
};

btn.addEventListener("click", btnHandler);
