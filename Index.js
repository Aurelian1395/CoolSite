"use strict";

const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")

usernameInput.addEventListener('input', setUsername)
let username = "";

function setUsername(e) {
  username = e.target.value
}

passwordInput.addEventListener('input', setPassword)
let password = ""

function setPassword(e) {
  password = e.target.value
}


function submit() {
  document.getElementById('valore').innerHTML = password
}

console.log('0');

fetch('http://127.0.0.1:3000')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResponse) {
    console.log('2 Dal server ricevo: ', jsonResponse.data)
  })
  .catch(function () {
    // Qui entro se riscontro qualche errore durante la richiesta 
  })
  .finally(function () {
    // Qui entro OGNI volta che la richiesta finisce (sia in bene che in male)
  })

// Questa console verrà eseguita subito, quando il fetch avrà ricevuto i dati farà il console.log nel then
// Te l'ho messo per farti capire l'ordine con cui funzionano 
console.log('1 dopo il fetch')

