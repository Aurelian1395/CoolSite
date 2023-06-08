"use strict";

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

usernameInput.addEventListener("input", setUsername);
let username = "";

function setUsername(e) {
  username = e.target.value;
}

passwordInput.addEventListener("input", setPassword);
let password = "";

function setPassword(e) {
  password = e.target.value;
}


function submit() {
  var password = document.getElementById("password").value;
  var username = document.getElementById("username").value;
  let credenziali = {
    username: username,
    password: password,
  };
  if (!username) {
    alert("Devi inserire un username");
    return;
  }

  if (password == "" || password == undefined) {
    alert("devi inserire una password corretta");
    return;
  }


  postData("http://localhost:3000/login", credenziali)
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success");
      console.log(data);
    });
    
}

// Chiamata al server

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response;
}