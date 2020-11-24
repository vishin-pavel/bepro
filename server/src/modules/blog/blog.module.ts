import { Module } from '@nestjs/common';
import {ArticleResolver} from "./gql/resolvers/ArticleResolver";

@Module({
    providers:[ArticleResolver]
})
export class BlogModule {}
