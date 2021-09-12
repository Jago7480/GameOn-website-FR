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

document.querySelector(".btn-submit").addEventListener("click", function(event){
  event.preventDefault(); // Évite le raffraichissement et la disparition de l'avancée du formulaire

  const firstnameValue = document.querySelector("#first").value;
  const lastnameValue = document.querySelector("#last").value;
  const emailValue = document.querySelector("#email").value;
  const ddnValue = document.querySelector("#birthdate").value;
  const participationValue = document.querySelector("#quantity").value;
  const checkboxValue = document.querySelector("#checkbox1").value;


  // const verifLastname = verifLastname(lastnameValue);
  // const verifEmail = verifEmail(emailValue);
  // const verifDdn = verifDdn(ddnValue);
  // const verifParticipation = verifParticipation(participationValue);
  // const verifVilles = verifVilles(villesValue);
  // const verifCheckbox = verifCheckbox(checkboxValue);


  //Processus de validation de chaque éléments, si tout est validé, affiche le message dans modal-valid
  if(verifFirstname(firstnameValue) === true && verifLastname(lastnameValue) === true && verifDdn(ddnValue) === true && verifParticipation(participationValue) === true && verifVilles() === true && verifCheckbox(checkboxValue) === true){
    var el3 = document.querySelector('.modal-valid');
    el3.style.display = "block";
    
    var el4 = document.querySelector('.formulaire'); // Est "sensé" retirer tous le formulaire pour ne laisser que le message de validation
    el4.style.display = "none";
  }

});

function verifFirstname (firstname){ //vérification du prénom, suivre ce principe(on l'a fait en cours)

  var el5 = document.querySelector('.invalid-prenom');

  if(firstname === "" || firstname.length < 2){

    return el5.style.display = "block";

  }else{

     el5.style.display = "none";
     return true;

  }

  return true;
}

function verifLastname (lastname){ //vérification du nom

  var el5 = document.querySelector('.invalid-nom');

  if(lastname === "" || lastname.length < 2){

    return el5.style.display = "block";

  }else{

      el5.style.display ="none";
      return true;
  }

  return true
}

function verifEmail (email){ //vérification du mail

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email.value.match(mailformat))
  {
    return true;
  }
  else
  {
    var el6 = document.querySelector('.invalid-mail');
    el5.style.display = "block";
  }
}

function verifDdn (ddn){ //vérification de la date de naissance

  if(ddn === ""){

    var el5 = document.querySelector('.invalid-ddn');
    el5.style.display = "block";
  }

  return true;
}

function verifParticipation (participation){ //vérification des participations

  if(participation === ""){

    var el6 = document.querySelector('.invalid-particioation');
    el6.style.display = "block";
  }

  return true;
}

function verifVilles(){ //vérification de la ville

  var el7 = document.querySelector('.invalid-villes');

  const villes = document.querySelectorAll("input[type='radio']");

  const j = villes.length;

  let resultChecked = false;

  for(let i=0; i<j; i++){
 
      if(villes[i].checked === true){

           resultChecked = true;

           break;

      }

  }

  if(resultChecked === false){

      return el7.style.display = "block";

  }else{

     el7.style.display = "block";

     return resultChecked;

  }

}

function verifCheckbox (checkbox){ //vérification de la case obligatoire à cocher

  if(document.getElementById("#checkbox1").checked === true)

  return false;
}