import {Article} from "./Article";

export interface IArticleReader {
    readArticle(article: Article): string;
}