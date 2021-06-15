const socials = document.querySelector("#socials");
const shareBtn = document.querySelector("#share-btn");

shareBtn.addEventListener("click", function () {
  if (socials.classList.contains("socials--is-toggled-on")) {
    socials.classList.remove("socials--is-toggled-on");
    socials.removeAttribute("role");
  } else {
    socials.classList.add("socials--is-toggled-on");
    socials.setAttribute("role", "alert");
  }

  if (shareBtn.classList.contains("card__btn--is-toggled-on")) {
    shareBtn.classList.remove("card__btn--is-toggled-on");
    shareBtn.setAttribute("aria-pressed", "false");
  } else {
    shareBtn.classList.add("card__btn--is-toggled-on");
    shareBtn.setAttribute("aria-pressed", "true");
  }
})