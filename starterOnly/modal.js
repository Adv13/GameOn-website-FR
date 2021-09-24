function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal(){
  modalbg.style.display = "none";
}

// close with 'Escape' key
function escapeModal(e) {
  if (e.key === 'Escape' && modalbg.style.display === "block") {
    closeModal();
  }
}

document.addEventListener('keydown', escapeModal);



//close with click button
function closeModalClick() {
  if (modalbg.style.display = "block") {
      modalbg.style.display = "none";
  };

}

document.querySelectorAll('.close').forEach(elem => {
  elem.onclick = closeModalClick;
});



