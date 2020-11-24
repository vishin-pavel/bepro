import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {BlogModule} from "./modules/blog/blog.module";
import {GraphQLModule} from "@nestjs/graphql";
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: ['.env.local', '.env.dev'],
        ignoreEnvFile: process.env.ENV === 'prod',
    }),
    GraphQLModule.forRoot({
        include: [BlogModule],
        autoSchemaFile: 'schema.graphql',
        sortSchema: true,
        playground: true
    }),
    BlogModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
