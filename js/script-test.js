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
    //Import array of pictures URL
    let bilderInput = document.querySelectorAll(".inputBilder");

    //Create new Article object with the input values
    let article = new Article(bannerInput.value, rubrikInput.value,  new Date(), true);
    console.log(article);
}

button.addEventListener("click", addArticle);