import {Args, Parent, Query, Resolver} from "@nestjs/graphql";
import {ArticleAuthorGqlDto} from "../dto/ArticleAuthorGqlDto";
import {ArticleGqlDto} from "../dto/ArticleGqlDto";

const articles: ArticleGqlDto[] = []
const authors: ArticleAuthorGqlDto[] = []

@Resolver(of => ArticleGqlDto)
export class ArticleResolver {
    @Query(returns => ArticleGqlDto)
    async article(
        @Args('id', {type: () => String})id: string): Promise<ArticleGqlDto> {
        return new ArticleGqlDto({
            id: 'str123',
            deleted: false,
            author: new ArticleAuthorGqlDto(),
                text: 'articleText'
        })
    }

    async author(
        @Parent()
            article: ArticleAuthorGqlDto
    ): Promise<ArticleAuthorGqlDto> {
        return new ArticleAuthorGqlDto()
    }
}