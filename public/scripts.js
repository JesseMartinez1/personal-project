document.querySelector("#show-login").addEventListener("click", function () {
  document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click", function () {
  document.querySelector(".popup").classList.remove("active");
});


document.querySelector("#show-register").addEventListener("click", function () {
  document.querySelector(".popup-register").classList.add("active")
  document.querySelector(".popup").classList.remove("active");
});

document.querySelector(".popup .close-btn-2").addEventListener("click", function () {
  document.querySelector(".popup-register").classList.remove("active");
});


// ----- filter dropdown on results page -----
function viewDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}