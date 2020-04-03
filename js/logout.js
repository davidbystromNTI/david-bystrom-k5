let logoutBtn = document.querySelector('#logout');

function logout () {
    location.replace('../startPage.html');
}

logoutBtn.addEventListener('click', logout);