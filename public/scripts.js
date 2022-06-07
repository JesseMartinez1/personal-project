const login = document.querySelector("#show-login")
const pop = document.querySelector(".popup")
const closeBtn = document.querySelector(".popup .close-btn")

const signUp = document.querySelector("#sign-up-info")
const pop2 = document.querySelector(".popup-register")
const closeBtn2 = document.querySelector(".popup-register .close-btn")

login.addEventListener("click", function () {
  document.querySelector(".popup").classList.add("active");
});

closeBtn.addEventListener("click", function () {
  pop.classList.remove("active");
});

signUp.addEventListener("click", function () {
  if (pop.classList.contains('active')) {
    openRegister()
    pop.classList.remove("active");
  }
});

closeBtn2.addEventListener("click", function () {
  pop2.classList.remove("active");
});

function openRegister() {
  document.querySelector(".popup-register").classList.add("active");
}

document.querySelector(".popup .close-btn").addEventListener("click", openRegister);

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
