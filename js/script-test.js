import Article from "./article.js";

let button = document.querySelector("#button");
let element = document.querySelector("#div1");
let bannerInput = document.querySelector("#bannerInput");
let rubrikInput = document.querySelector("#rubrikInput");
let clearBtn = document.querySelector("#clear");
let selectNews = document.querySelector("#newsType");
let fleraBilder = document.querySelector("#flerBilder");
let inputBox = document.querySelector("#inputBox");


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
    }
    return pictureArray;
}

function createPictures() {
    //Read in Picture(s)
    let pictureArray = readValuePictures();
    console.log(pictureArray);
    
    //Check if empty
    if (pictureArray != ""){
        //Create container for picture(s)
        let bildContainer = document.createElement("div");
        bildContainer.className += "bildContainer ";

        //Check how many pictures
        if (pictureArray.length > 1){
            
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

function buildArticle() {
    let article = createArticle();

    //Create a div to act as a container and append it to div element
    let container = document.createElement("div");
    container.className += "container ";
    element.appendChild(container);

    //Create banner and text and append it to the container
    let banner = document.createElement("h3");
    let textBanner = document.createTextNode(article.banner);
    let bannerContainer = document.createElement("div");
    bannerContainer.className += "bannerContainer ";
    container.appendChild(bannerContainer);
    bannerContainer.appendChild(banner);
    banner.appendChild(textBanner);

    //Create pictures and append it to container
    let bildContainer = createPictures();
    container.appendChild(bildContainer);

    //Create header and text and append it to the container
    let rubrik = document.createElement("h2");
    let textRubrik = document.createTextNode(article.headline);
    let rubrikContainer = document.createElement("div");
    rubrikContainer.className += "rubrikContainer ";
    container.appendChild(rubrikContainer);
    rubrikContainer.appendChild(rubrik);
    rubrik.appendChild(textRubrik);
    
    //Change news color
    container.className += article.newsType;

    

}
button.addEventListener("click", buildArticle);