import {ArticleAuthor} from "./ArticleAuthor";

export class Article {
    id: string
    deleted: boolean

    constructor(public text, public author: ArticleAuthor) {
        this.deleted = false
    }

    getText() {
        return this.text
    }
}