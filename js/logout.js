let logoutBtn = document.querySelector("#logout");

function logout () {
    window.location.href = "../startPage.html";
}

logoutBtn.addEventListener('click', logout);