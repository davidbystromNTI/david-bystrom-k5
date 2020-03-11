
export default class Article {
    constructor(headline = new String(), body = new String(), author = new String(), createdDate = new Date(), published = false) {
        this.headline = headline;
        this.body = body;
        this.author = author;
        this.createdDate = createdDate;
        this.published = published;
    }

    togglePublish () {
        this.published = !this.published;
    }
}

/*
class ArticleDB {
    constructor(articles = []) {
        this.articles = articles;
    }

    addArticle(article = new Article())
    {
        this.articles.push(article);
    }

    deleteAllArticlesByAuthor(author) {
        //todo: implement this function
    }
} */