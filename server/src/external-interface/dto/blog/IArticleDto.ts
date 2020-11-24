import {IArticleAuthorDto} from "./IArticleAuthorDto";

export interface IArticleDto {
    author: IArticleAuthorDto;
    deleted: boolean;
    id: string;
    text;
}