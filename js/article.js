export default class Article {
    constructor(banner = new String(), headline = new String(), pictures = [], newsType = new String(), createdDate = new Date(), published = false) {
        this.banner = banner;
        this.headline = headline;
        this.pictures = pictures;
        this.newsType = newsType;
        this.createdDate = createdDate;
        this.published = published;
    }
}