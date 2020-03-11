import Article from "./person.js";

let myArticle = new Article("Virus", "lorem ipsum dolor sit amet", "Sebastian Jensen", new Date(), true);
console.log(myArticle);

let button = document.querySelector("#button");
let element = document.querySelector("#div1");
let bannerInput = document.querySelector("#bannerInput");
let rubrikInput = document.querySelector("#rubrikInput");
let clearBtn = document.querySelector("#clear");
let selectNews = document.querySelector("#newsType");
let fleraBilder = document.querySelector("#flerBilder");
let inputBox = document.querySelector("#inputBox");

let newsArray = [];

let storageLocal = localStorage.getItem("news");

let loadedJson = JSON.parse(storageLocal);

//Använd Article och andra hjälpmedel, kolla lighthouse

if (loadedJson != null ) {
    for (let i = loadedJson.length - 1; i >= 0; i--) {
        let container = document.createElement("div");
        let banner = document.createElement("h3");
        let textBanner = document.createTextNode(loadedJson[i].banner);
        let bannerContainer = document.createElement("div");
        bannerContainer.className += "bannerContainer ";
        container.appendChild(bannerContainer);
        bannerContainer.appendChild(banner);
        banner.appendChild(textBanner);
        let bilder = loadedJson[i].bildsrc;
        container.className += "container ";
        console.log(bilder[0]);
        let bildContanier = document.createElement("div");
        bildContanier.className += "bildContainer ";
        container.appendChild(bildContanier);
        if (bilder.length >= 3) {
            let slideShowContainer = document.createElement("div");
            slideShowContainer.className += "slider ";
            bildContanier.appendChild(slideShowContainer);
            let slideLinkContainer = document.createElement("div");
            slideLinkContainer.className += "slideLinkContainer ";
            slideShowContainer.appendChild(slideLinkContainer);
            for (let j = 0; j < bilder.length; j++) {
                let slideContainer = document.createElement("div");
                slideContainer.className += "slide ";
                slideContainer.id += "slide-" + (j + 1) + loadedJson[i].banner;
                slideShowContainer.appendChild(slideContainer);

                let slideImg = document.createElement("img");
                slideImg.src = bilder[j];
                slideContainer.appendChild(slideImg);
                console.log(bilder[j]);
                slideImg.className += "slideImg ";

                let slideLink = document.createElement("a");
                slideLink.href = "#slide-" + (j + 1) + loadedJson[i].banner;
                slideLink.className += "slideLink ";
                let slideLinkText = document.createTextNode((j + 1));
                slideLink.appendChild(slideLinkText);
                slideLinkContainer.appendChild(slideLink);
            }
        }
        else {
            for (let i = 0; i < bilderInput.length; i++) {

                let bild = document.createElement("img");
                bild.src = bilder[j];
                bild.className += "newsImg ";
                console.log("detta funken bunken");
                if (i == 1) {
                    bild.className += "secondImg ";
                }
                else {
                    bild.className += "firstImg ";
                }

                console.log(j);
                console.log(bilder.length);
                bildContanier.appendChild(bild);
            }
        }
        


        let rubrik = document.createElement("h2");
        let textRubrik = document.createTextNode(loadedJson[i].rubrik);
        let rubrikContainer = document.createElement("div");
        rubrikContainer.className += "rubrikContainer ";
        container.appendChild(rubrikContainer);
        rubrikContainer.appendChild(rubrik);
        rubrik.appendChild(textRubrik);

        container.className += loadedJson[i].newsColor;

        element.appendChild(container);

        newsArray.push(loadedJson[i]);
    }
}

console.log(storageLocal);



//Use Local Storage https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

function addPictureBox() {
    textbox = document.createElement("input");
    textbox.type = "text";
    textbox.placeholder = "Ange Bild URL...";
    textbox.className += "inputBilder";
    inputBox.appendChild(textbox);
}

function clearStorage() {
    localStorage.clear();
    newsArray = [];
    location.reload();
}

function addText() {

    let newsTypeColor = "";
    let news =  {
        banner: "",
        rubrik: "",
        bildsrc: [],
        newsColor: "",
    };
    let container = document.createElement("div");
    let banner = document.createElement("h3");
    let textBanner = document.createTextNode(bannerInput.value);
    let bannerContainer = document.createElement("div");
    bannerContainer.className += "bannerContainer ";
    container.appendChild(bannerContainer);
    bannerContainer.appendChild(banner);
    banner.appendChild(textBanner);

    container.className += "container ";
    
    let bilderInput = document.querySelectorAll(".inputBilder");
    
    if (bilderInput.value == "") {

    }
    else {
        let bildContanier = document.createElement("div");
        bildContanier.className += "bildContainer ";
        container.appendChild(bildContanier);
        if (bilderInput.length >= 3) {
            let slideShowContainer = document.createElement("div");
            slideShowContainer.className += "slider ";
            bildContanier.appendChild(slideShowContainer);
            let slideLinkContainer = document.createElement("div");
            slideLinkContainer.className += "slideLinkContainer ";
            slideShowContainer.appendChild(slideLinkContainer);
            for (let i = 0; i < bilderInput.length; i++) {
                let slideContainer = document.createElement("div");
                slideContainer.className += "slide ";
                slideContainer.id += "slide-" + (i + 1) + bannerInput.value;
                slideShowContainer.appendChild(slideContainer);

                let slideImg = document.createElement("img");
                slideImg.src = bilderInput[i].value;
                slideContainer.appendChild(slideImg);
                console.log(bilderInput[i].value);
                slideImg.className += "slideImg ";

                let slideLink = document.createElement("a");
                slideLink.href = "#slide-" + (i + 1) + bannerInput.value;
                slideLink.className += "slideLink ";
                let slideLinkText = document.createTextNode((i+1));
                slideLink.appendChild(slideLinkText);
                slideLinkContainer.appendChild(slideLink);
            }
        }
        else {
            for (let i = 0; i < bilderInput.length; i++) {
            
                let bild = document.createElement("img");
                bild.src = bilderInput[i].value;
                bild.className += "newsImg ";
                console.log("detta funken bunken");
                if (i == 1) {
                    bild.className += "secondImg ";
                }
                else {
                    bild.className += "firstImg "; 
                }
            
                console.log(i);
                console.log(bilderInput.length);
                bildContanier.appendChild(bild);
        }
        }
        
    }

    let bildArray = [];
    
    for (i = 0; i < bilderInput.length; i++) {
        bildArray[i] = bilderInput[i].value;
    }

    console.log(bilderInput);
    

    let rubrik = document.createElement("h2");
    let textRubrik = document.createTextNode(rubrikInput.value);
    let rubrikContainer = document.createElement("div");
    rubrikContainer.className += "rubrikContainer ";
    container.appendChild(rubrikContainer);
    rubrikContainer.appendChild(rubrik);
    rubrik.appendChild(textRubrik);
    
    newsTypeColor = selectNews.value;
    container.className += selectNews.value;

    console.log(bildArray);

    let newsOne = Object.create(news);

    newsOne.banner = bannerInput.value;
    newsOne.rubrik = rubrikInput.value;
    newsOne.bildsrc = bildArray;
    newsOne.newsColor = newsTypeColor;

    newsArray.push(newsOne);

    element.appendChild(container);

    let myJson = JSON.stringify(newsArray);

    console.log(myJson);
    localStorage.setItem('news', myJson);

    console.log(window.localStorage);

    newsOne = "";
}

button.addEventListener("click", addText);
clearBtn.addEventListener("click", clearStorage);
fleraBilder.addEventListener("click", addPictureBox);