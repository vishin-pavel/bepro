import {CommentAuthor} from "./CommentAuthor";
import {Article} from "../article/Article";

export class Comment {
    id: string
    commentedArticleId: string
    createdAt: Date

    constructor(public text: string, article: Article, public author: CommentAuthor) {
        this.commentedArticleId = article.id
        this.createdAt = new Date()
    }

    getText() {
        return this.text;
    }
}