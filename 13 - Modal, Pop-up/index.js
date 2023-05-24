const myModal = document.getElementById("myModal");
const btn = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});
