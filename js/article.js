export default class Article {
    constructor(banner = new String(), headline = new String(), author = new String(), createdDate = new Date(), published = false) {
        this.banner = banner;
        this.headline = headline;
        this.author = author;
        this.createdDate = createdDate;
        this.published = published;
    }
}