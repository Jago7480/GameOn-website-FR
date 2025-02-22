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

//Fermer le formulaire
var el = document.querySelector('.close');

el.addEventListener('click', function () {
  var el2 = document.querySelector('.bground');
  el2.style.display = "none";
});

//Fermer le formulaire après validation
var el11 = document.querySelector('.close-valid');

el11.addEventListener('click', function () {
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


  //Processus de validation de chaque éléments, si tout est validé, affiche le message dans modal-valid
  verifFirstname(firstnameValue);
  verifLastname(lastnameValue);
  verifEmail(emailValue);
  verifDdn(ddnValue);
  verifParticipation(participationValue);
  verifVilles();
  verifCheckbox();
  
  if(verifFirstname(firstnameValue) === true && verifLastname(lastnameValue) === true && verifEmail(emailValue) === true && verifDdn(ddnValue) === true && verifParticipation(participationValue) === true && verifVilles() === true && verifCheckbox() === true){
    var el3 = document.querySelector('.modal-valid');
    el3.style.display = "flex";
    
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
}

function verifLastname (lastname){ //vérification du nom
  
  var el5 = document.querySelector('.invalid-nom');

  if(lastname === "" || lastname.length < 2){

  return el5.style.display = "block";

  }else{

      el5.style.display = "none";
      return true;
  }
}

function verifEmail (email){ //vérification du mail

  var el6 = document.querySelector('.invalid-mail');

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(email.match(mailformat)){
    el6.style.display = "none";
    return true;

  }else{

    return el6.style.display = "block";
  }
}

function verifDdn (ddn){ //vérification de la date de naissance

  var el7 = document.querySelector('.invalid-ddn');

  //Conversion de la date en JJ/MM/YYYY et mise en place d'une fourchette d'années

  const dateFormat = new Date(ddn);

  const dateFormatYear = dateFormat.getFullYear(); 

  if(ddn === "" || dateFormatYear < 1920 || dateFormatYear > 2003){

    return el7.style.display = "block";

  }else{

      el7.style.display = "none";
      return true;

  }
}

function verifParticipation (participation){ //vérification des participations

  var el8 = document.querySelector('.invalid-participation');

  if(participation === ""){

  return el8.style.display = "block";
  }else{

    el8.style.display = "none";
    return true;
  }
}

function verifVilles(){ //vérification de la ville

  var el9 = document.querySelector('.invalid-villes');

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

    el9.style.display = "block";

    return resultChecked;

  }else{

     el9.style.display = "none";

     return resultChecked;

  }
}

function verifCheckbox(){ //vérification de la case obligatoire à cocher

var el10 = document.querySelector(".invalid-checkbox");

  if(document.querySelector("#checkbox1").checked === true){

  el10.style.display = "none";
  return true;

   }else{

  return el10.style.display = "block";

 }
}