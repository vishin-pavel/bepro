import {IArticleAuthorDto} from "../../../../external-interface/dto/blog/IArticleAuthorDto";
import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class ArticleAuthorGqlDto implements IArticleAuthorDto {
    @Field(type => ID)
    id: string;
}