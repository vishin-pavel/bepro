import {IArticleReader} from "../article/IArticleReader";
import {ICommentReader} from "../comment/ICommentReader";
import {Article} from "../article/Article";
import {Comment} from "../comment/Comment";
import {CommentAuthorAdapter} from "./CommentAuthorAdapter";
import {ArticleAuthorAdapter} from "./ArticleAuthorAdapter";

export class Visitor implements IArticleReader, ICommentReader {
    id: string

    readArticle(article: Article): string {
        return article.getText();
    }

    writeArticle(text): Article {
        const articleAuthor = ArticleAuthorAdapter.getAuthor(this)
        return new Article(text, articleAuthor)
    }

    readComment(comment: Comment): string {
        return comment.getText();
    }

    commentArticle(article: Article, commentText: string): Comment {
        const commentAuthor = CommentAuthorAdapter.getAuthor(this)
        return new Comment(commentText, article, commentAuthor)
    }

}