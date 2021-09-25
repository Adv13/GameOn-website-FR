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
document.querySelectorAll('.close').forEach(elem => {
  elem.onclick = closeModal;
});


// (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
// (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
// (3) L'adresse électronique est valide.
// (4) Pour le nombre de concours, une valeur numérique est saisie.

// Form validation

    // Retrieve nodes for validation

      // firstname
      const firstName = document.querySelector('#first');
      const divPrenom = document.querySelector('#divPrenom');
            // lastname
      const lastName = document.querySelector('#last');
      const divNom = document.querySelector('#divNom');
            //email
      const email = document.querySelector('#email');
      const divEmail = document.querySelector('#divEmail');
            // birthdate 
      const birthDate = document.querySelector('#birthdate');
      const divBirthdate = document.querySelector('#divBirthdate');
            // nbre of tournaments
      const tournamentNr = document.querySelector('#quantity');
      const divTournament = document.querySelector('#divTournament');
            // cities
      const radios = document.getElementsByName('location');
      const checkboxDiv = document.querySelector('#divLocation');
            // terms of use
      const checkbox1 = document.querySelector("#checkbox1");
      const divCheckbox1 = document.querySelector('#divCheckbox1');
      
      
      
         // Manage form submission
      
         document.querySelector('form').addEventListener('submit', e =>{
          e.preventDefault();
      
          //add a counter to check each form input
          let counter = 0;
        
            // Validation conditions
        
              // input values does not accept blanks
          const firstNameValue = firstName.value.trim();
          const lastNameValue = lastName.value.trim();
        
            //define email format
          const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
            //define tournament format
          const tournamentNrFormat = /\d+/g;
         }

         //test 2