const tabHidden = document.querySelector("main");
const modalBg = document.querySelector("#formulaire");

export function launchModal() {
  // launch modal
  modalBg.style.display = "block";
  modalBg.removeAttribute("role");
  modalBg.querySelector("#form__close ").focus();
  tabHidden.style.display = "none";
}

export function closeModal() {
  // close modal
  modalBg.style.display = "none";
  modalBg.setAttribute("role", "dialog");
  tabHidden.style.display = "block";
}

document.addEventListener("keydown", (e) => {
  // keydown event
  const submitBtn = document.querySelector(".contact_button");
  const closeBtn = document.querySelector("#form__close");
  if (e.key === "Tab") {
    if (document.activeElement === submitBtn) {
      e.preventDefault();
      closeBtn.focus();
    }
  }
});
