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


// ======================================================

// Prima di eseguire questa parte devi scaricare il mio progetto 

// Installare node.js https://nodejs.org/it/download/ 
// Nella powershell o cmd scrivi: git clone https://github.com/Silvano14/Fastify_server.git (Nella cartella dove metti i progetti)
// Entra nel mio progetto e scrivi nella console:  npm install 
// Dopo che è finito:  node server.js 


console.log('0 prima del fetch');

// http è il protocollo utilizzato, di solito per la richiesta di dati, https è quello "sicuro"
// 127.0.0.1 signifca che stai interrogando l'ip della tua stessa macchina
// il 3000 è la porta alla quale la istanza mette a disposizione la comunicazione
fetch('http://127.0.0.1:3000')
  // Uso questo then per formattare la risposta del server in un dato leggibile
  //https://developer.mozilla.org/en-US/docs/Web/API/Response/json
  .then(function (response) {
    return response.json();
  })
  //Qui leggo la risposta del server e mostro in console il campo data che, di solito, è il campo con i valori
  .then(function (jsonResponse) {
    console.log('2 Dal server ricevo: ', jsonResponse.data)
  })
  .catch(function (reject) {
    console.log("Errore durante la richiesta: ", reject)
    // Qui entro se riscontro qualche errore durante la richiesta 
  })
  .finally(function () {
    console.log('3 Vibranium finally!')
    // Qui entro SEMPRE, ogni volta che faccio una richiesta
  })

// Questa console verrà eseguita subito, quando il fetch avrà ricevuto i dati farà il console.log nel then
// Te l'ho messo per farti capire l'ordine con cui funzionano 
console.log('1 dopo il fetch')

