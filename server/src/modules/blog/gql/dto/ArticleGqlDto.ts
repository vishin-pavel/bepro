import {Field, ID, ObjectType} from "@nestjs/graphql";
import {ArticleAuthorGqlDto} from "./ArticleAuthorGqlDto";
import {IArticleDto} from "../../../../external-interface/dto/blog/IArticleDto";

@ObjectType()
export class ArticleGqlDto implements IArticleDto {
    constructor(articlePartial?: Partial<ArticleGqlDto>) {
        Object.assign(this, articlePartial)
    }
    @Field(type=>ID)
    id: string;
    @Field(type=>String)
    text:string;
    @Field(type=>ArticleAuthorGqlDto)
    author: ArticleAuthorGqlDto;
    @Field(type=>String)
    deleted: boolean;
}