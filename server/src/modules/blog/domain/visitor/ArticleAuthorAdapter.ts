import {ArticleAuthor} from "../article/ArticleAuthor";
import {Visitor} from "./Visitor";

export class ArticleAuthorAdapter {
    static getAuthor(visitor: Visitor){
        const author =  new ArticleAuthor()
        author.id = visitor.id
        return author
    }
}