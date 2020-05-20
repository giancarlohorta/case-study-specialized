const buttonModal = document.querySelector('[data-modal="button-enter"]');
const modal = document.querySelector('[data-modal="container"]');
const buttonClose = document.querySelector('[data-modal="fechar"]');

console.log(buttonModal);

function openModal() {
  modal.classList.add("active");
}
function closeModal() {
  modal.classList.remove("active");
}
buttonModal.addEventListener("click", openModal);
buttonClose.addEventListener("click", closeModal);
