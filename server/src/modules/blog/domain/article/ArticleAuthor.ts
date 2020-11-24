import {Article} from "./Article";

export class ArticleAuthor {
    id: string

    delete(article: Article): Article{
        article.deleted = true
        return article
    }
}