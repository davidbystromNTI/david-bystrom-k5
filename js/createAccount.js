import Account from './account.js';

const createAccountBtn = document.querySelector('#createAccount');
const inputEmail = document.querySelector('#emailInput');
const inputUsername = document.querySelector('#usernameInput');
const inputPassword = document.querySelector('#passwordInput');
const firstNameInput = document.querySelector('#firstNameInput');
const lastNameInput = document.querySelector('#lastNameInput');

let accounts = [];

function createAccount() {
    //Create object account with input data
    let account = new Account(inputUsername.value, inputEmail.value, inputPassword.value, firstNameInput.value, lastNameInput.value);
    
    //Add account to array accounts
    accounts.push(account);

    //Make JSON of accounts
    let myJSON = JSON.stringify(accounts);

    //Add JSON to localstorage
    localStorage.setItem('account', myJSON);

    console.log(localStorage);

    location.reload();
}

createAccountBtn.addEventListener("click", createAccount);