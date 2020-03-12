import Article from "./article.js";

let button = document.querySelector("#button");
let element = document.querySelector("#div1");
let bannerInput = document.querySelector("#bannerInput");
let rubrikInput = document.querySelector("#rubrikInput");
let clearBtn = document.querySelector("#clear");
let selectNews = document.querySelector("#newsType");
let fleraBilder = document.querySelector("#flerBilder");
let inputBox = document.querySelector("#inputBox");

function addArticle() {
    //Read Picture input
    let pictureArray = readValuePictures();
    //Create new Article object with the input values
    let article = new Article(bannerInput.value, rubrikInput.value, pictureArray, new Date(), true);
}

function readValuePictures() {
    let bilderInput = document.querySelectorAll(".inputBilder");
    let pictureArray = [];
    for (let i = 0; i < bilderInput.length; i++) {
        pictureArray[i] = bilderInput[i].value;
    }   
    return pictureArray;
}

button.addEventListener("click", addArticle);