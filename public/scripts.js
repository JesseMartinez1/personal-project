document.querySelector("#show-login").addEventListener("click", function () {
  document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function () {
  document.querySelector(".popup").classList.remove("active");
});

// function showRegister() {
//   let registerPopup = document.querySelector(".popup-register");
//   registerPopup.style.display = "block";
// }


document.querySelector("#sign-up-info").addEventListener("click", function () {
  document.querySelector(".popup-register").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function () {
  document.querySelector(".popup-register").classList.remove("active");
});