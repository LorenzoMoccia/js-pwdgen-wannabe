"use strict";

const firstName = prompt("Il tuo nome?");

const lastName = prompt("Il tuo cognome?");

const favouriteColor = prompt("Il tuo colore preferito?");

const userPassword = firstName + lastName + favouriteColor + 76;

document.getElementById('title').innerHTML = userPassword;