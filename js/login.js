// import Account from './account.js';

// const loginBtn = document.querySelector('#login');
// const usernameInput = document.querySelector('#usernameInputLogin');
// const passwordInput = document.querySelector('#passwordInputLogin');

// let accounts = [];

// function onLoad () {
//     //Load localStorage
//     let storageLocal = localStorage.getItem('account');
    
//     //Check if localStorage is empty
//     if (storageLocal != null) {
//         //Parse to script
//         let loadedJson = JSON.parse(storageLocal);
        
//         //Add loaded accounts to array accounts
//         accounts = loadedJson;

        
//     }
// }

// function login() {
//     //Check if username exists
//     let username = checkUsername();

//     //If not log error message 
//     if(username === false) {
//         console.log('There is no account assosiated with that username.');
//     }
//     else {
//         //Redirect person to tool
//         location.replace('tool.html');
//     }
// }

// function checkUsername () {
//     for (let i = 0; i < accounts.length; i++) {
//         if (accounts[i].username == usernameInput.value) return i;
//     }

//     return false;
// }

// function checkPassword (number) {
//     if (accounts[number].password == passwordInput.value) return true;
//     else return false;
// }

// loginBtn.addEventListener('click', login);
// document.addEventListener('DOMContentLoaded', onLoad);