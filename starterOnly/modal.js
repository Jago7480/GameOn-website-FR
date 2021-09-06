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

//modifications apportées

//close modal form
var el = document.querySelector('.close');

el.addEventListener('click', function () {
  var el2 = document.querySelector('.bground');
  el2.style.display = "none";
});

//var rename
// var firstname = document.getElementById("first");
// var lastname = document.getElementById("last");
// var email = document.getElementById("email");
// var ddn = document.getElementById("birthdate");
// var participation = document.getElementById("quantity");
// var villes = document.getElementById("location");
// var checkbox = document.getElementById("checkbox1");

//

document.querySelector(".btn-submit").addEventListener("click", function(event){
  event.preventDefault(); // Prevent refresh

  const firstnameValue = document.querySelector("#first").value;
  const lastnameValue = document.querySelector("#last").value;
  const emailValue = document.querySelector("#email").value;
  const ddnValue = document.querySelector("#birthdate").value;
  const participationValue = document.querySelector("#quantity").value;
  const villesValue = document.querySelector("#location").value;
  const checkboxValue = document.querySelector("#checkbox1").value;

  const verifFirstname = verifFirstname(firstnameValue);
  const verifLastname = verifLastname(lastnameValue);
  const verifEmail = verifEmail(emailValue);
  const verifDdn = verifDdn(ddnValue);
  const verifParticipation = verifParticipation(participationValue);
  const verifVilles = verifVilles(villesValue);
  const verifCheckbox = verifCheckbox(checkboxValue);

  if(verifFirstname === true && verifLastname === true && verifEmail === true && verifDdn === true && verifParticipation === true && verifVilles === true && verifCheckbox === true){
    var el3 = document.querySelector('.modal-valid');
    el3.style.display = "block";
    
    var el4 = document.querySelector('.formData'); // Est "sensé" retirer tous le formulaire pour ne laisser que le message de validation
    el4.style.display = "none";
  }

});

function verifFirstname (firstname){

  if(firstname === "" || firstname.length < 2){

    var el5 = document.querySelector('.invalid-prenom');
    el5.style.display = "block";
  }

  return true;
}

function verifLastname (lastname){

  if(lastname === "" || lastname.length < 2){

    var el5 = document.querySelector('.invalid-nom');
    el5.style.display = "block";
  }

  return true;
}