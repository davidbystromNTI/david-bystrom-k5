export default class Article {
    constructor(banner = new String(), headline = new String(), pictures = [], createdDate = new Date(), published = false) {
        this.banner = banner;
        this.headline = headline;
        this.pictures = pictures;
        this.createdDate = createdDate;
        this.published = published;
    }
}