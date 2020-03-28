import Account from './account.js';

const loginBtn = document.querySelector('#login');

let accounts = [];

function onLoad () {
    //Load localStorage
    let storageLocal = localStorage.getItem('account');
    
    //Check if localStorage is empty
    if (storageLocal != null) {
        //Parse to script
        let loadedJson = JSON.parse(storageLocal);
        
        //Add loaded accounts to array accounts
        accounts = loadedJson;
    }
}

function login() {
    
}

loginBtn.addEventListener('click', login);
document.addEventListener('DOMContentLoaded', onLoad);