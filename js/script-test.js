import Article from "./article.js";

let button = document.querySelector("#button");
let element = document.querySelector("#div1");
let bannerInput = document.querySelector("#bannerInput");
let rubrikInput = document.querySelector("#rubrikInput");
let clearBtn = document.querySelector("#clear");
let selectNews = document.querySelector("#newsType");
let fleraBilder = document.querySelector("#flerBilder");
let inputBox = document.querySelector("#inputBox");

let newsArray = [];

function createArticle() {
    //Read Picture input
    let pictureArray = readValuePictures();
    //Create new Article object with the input values
    let article = new Article(bannerInput.value, rubrikInput.value, pictureArray, selectNews.value, new Date(), true);
    return article;
}

function readValuePictures() {
    let bilderInput = document.querySelectorAll(".inputBilder");
    let pictureArray = [];
    for (let i = 0; i < bilderInput.length; i++) {
        pictureArray[i] = bilderInput[i].value;
        //console.log(pictureArray[i]);
    }
    return pictureArray;
}

function createPictures(article) {
    //Read in Picture(s)
    let pictureArray = article.pictures;
    console.log(pictureArray);
    
    //Check if empty
    if (pictureArray != ""){
        //Create container for picture(s)
        let bildContainer = document.createElement("div");
        bildContainer.className += "bildContainer ";

        //Check how many pictures
        if (pictureArray.length > 1){
            //Create Contanier for Slide Show
            let slideShowContainer = document.createElement("div");
            slideShowContainer.className += "slider ";
            bildContainer.appendChild(slideShowContainer);
            
            //Create contanier for slider links
            let slideLinkContainer = document.createElement("div");
            slideLinkContainer.className += "slideLinkContainer ";
            slideShowContainer.appendChild(slideLinkContainer);
            
            //Create imgs and links for slideshow
            for (let i = 0; i < pictureArray.length; i++) {
                let slideContainer = document.createElement("div");
                slideContainer.className += "slide ";
                slideContainer.id += "slide-" + (i + 1) + "-" + article.banner;
                slideShowContainer.appendChild(slideContainer);

                let slideImg = document.createElement("img");
                slideImg.src = pictureArray[i];
                slideContainer.appendChild(slideImg);
                console.log(pictureArray[i]);
                slideImg.className += "slideImg ";

                let slideLink = document.createElement("a");
                slideLink.href = "#slide-" + (i + 1) + "-" + article.banner;
                slideLink.className += "slideLink ";
                let slideLinkText = document.createTextNode((i + 1));
                slideLink.appendChild(slideLinkText);
                slideLinkContainer.appendChild(slideLink);
            }
        }
        else {        
            //Creating Picture and appending attributes
            let bild = document.createElement("img");
            console.log(pictureArray[0]);
            bild.src = pictureArray[0];
            bild.className += "firstImg ";
            
            //Appendding picture too picture container
            bildContainer.appendChild(bild);
        }        
        //Returning pictureContainer
        return bildContainer;
    }
}

function JSONArticle(article) {
    //Add Article to newsArray
    newsArray.push(article);
    
    //Create JSON of newsArray
    let myJSON = JSON.stringify(newsArray);

    //Add JSON to localStorage
    localStorage.setItem('news', myJSON);
}

function buildArticle() {
    let article = createArticle();

    //Create a div to act as a container and append it to div element
    let container = createContainer();
    
    //Create banner and text and append it to the container
    createBanner(article, container);

    //Create pictures and append it to container
    let bildContainer = createPictures(article);
    container.appendChild(bildContainer);

    //Create header and text and append it to the container
    createRubrik(article, container);
    
    //Change news color
    container.className += article.newsType;

    //Create JSON of article and add to LocalStorage
    JSONArticle(article);   

}

function addPictureBox() {
    //Create and add a new textbox for img URLs
    let textbox = document.createElement("input");
    textbox.type = "text";
    textbox.placeholder = "Ange Bild URL...";
    textbox.className += "inputBilder";
    inputBox.appendChild(textbox);
}

function loadedPage () {
    //Get localStorage
    let storageLocal = localStorage.getItem("news");

    if (storageLocal != null) {
        //Parse to script
        let loadedJson = JSON.parse(storageLocal);

        for (let i = 0; i < loadedJson.length; i++) {
            //Create a div to act as a container and append it to div element
            let container = createContainer();

            //Create banner and text and append it to the container
            createBanner(loadedJson[i], container);

            //Create pictures and append it to container
            let bildContainer = createPictures(loadedJson[i]);
            container.appendChild(bildContainer);

            //Create header and text and append it to the container
            createRubrik(loadedJson[i], container);

            //Change news color
            container.className += loadedJson[i].newsType;

            //Add loaded JSON to newsArray
            newsArray.push(loadedJson[i]);
        }
    }
    
}

//Creates Contanier for article
function createContainer() {
    let container = document.createElement("div");
    container.className += "container ";
    element.appendChild(container);

    return container;
}

//Create banner and append it to contanier
function createBanner(article, container) {
    let banner = document.createElement("h3");
    let textBanner = document.createTextNode(article.banner);
    let bannerContainer = document.createElement("div");
    bannerContainer.className += "bannerContainer ";
    container.appendChild(bannerContainer);
    bannerContainer.appendChild(banner);
    banner.appendChild(textBanner);
}

//Create rubrik and append it to container
function createRubrik(article, container) {
    let rubrik = document.createElement("h2");
    let textRubrik = document.createTextNode(article.headline);
    let rubrikContainer = document.createElement("div");
    rubrikContainer.className += "rubrikContainer ";
    container.appendChild(rubrikContainer);
    rubrikContainer.appendChild(rubrik);
    rubrik.appendChild(textRubrik);
}

//Clears Storage and webpage
function clearStorage() {
    localStorage.clear();
    newsArray = [];
    location.reload();
}

//EventListeners
button.addEventListener("click", buildArticle);
fleraBilder.addEventListener("click", addPictureBox);
clearBtn.addEventListener('click', clearStorage);
document.addEventListener('DOMContentLoaded', loadedPage);