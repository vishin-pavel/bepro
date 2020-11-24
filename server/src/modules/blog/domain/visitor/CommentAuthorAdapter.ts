import {Visitor} from "./Visitor";
import {CommentAuthor} from "../comment/CommentAuthor";

export class CommentAuthorAdapter {
    static getAuthor(visitor: Visitor){
        const author =  new CommentAuthor()
        author.id = visitor.id
        return author
    }
}