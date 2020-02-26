const $btn = document.querySelector(".cta");
const $form = document.querySelector(".form-wrapper");

$btn.addEventListener("click", () => {
  $form.classList.toggle("-hide");
});
