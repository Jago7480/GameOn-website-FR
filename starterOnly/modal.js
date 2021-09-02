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
var firstname = document.getElementById("first");
var lastname = document.getElementById("last");
var email = document.getElementById("email");
var ddn = document.getElementById("birthdate");
var participation = document.getElementById("quantity");
var villes = document.getElementById("location");
var checkbox = document.getElementById("checkbox1");

//When the user click on the field, show the message box
firstname.onfocus = function() {
 var el3 = document.querySelector('.invalid-prenom');
 el3.style.display = "block";
};

lastname.onfocus = function() {
  var el4 = document.querySelector('.invalid-nom');
  el4.style.display = "block";
};

email.onfocus = function() {
  var el5 = document.querySelector('.invalid-mail');
  el5.style.display = "block";
};

ddn.onfocus = function() {
  var el5 = document.querySelector('.invalid-ddn');
  el5.style.display = "block";
};

participation.onfocus = function() {
  var el5 = document.querySelector('.invalid-participation');
  el5.style.display = "block";
};

//When the user click outside of the field, hide the message box
firstname.onblur = function() {
  var el3 = document.querySelector('.invalid-prenom');
  el3.style.display = "none";
 };
 
 lastname.onblur = function() {
   var el4 = document.querySelector('.invalid-nom');
   el4.style.display = "none";
 };
 
 email.onblur = function() {
   var el5 = document.querySelector('.invalid-mail');
   el5.style.display = "none";
 };
 
 ddn.onblur = function() {
   var el5 = document.querySelector('.invalid-ddn');
   el5.style.display = "none";
 };
 
 participation.onblur = function() {
   var el5 = document.querySelector('.invalid-participation');
   el5.style.display = "none";
 };