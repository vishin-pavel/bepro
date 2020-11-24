import {Comment} from "./Comment";

export interface ICommentReader {
    readComment(comment: Comment): string
}