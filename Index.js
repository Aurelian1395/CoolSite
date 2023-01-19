"use strict";

const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")

usernameInput.addEventListener('input', setUsername)
let username = "";
function setUsername(e) {

    username = e.target.value
}

passwordInput.addEventListener('input', setPassword)
let password=""

function setPassword(e) {
    password = e.target.value

}


function submit() {
    document.getElementById('valore').innerHTML= password

        

         
}





//fetch

