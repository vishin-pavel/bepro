import {Article} from "./Article";
import {ArticleAuthor} from "./ArticleAuthor";

const ARTICLE_TEXT = 'articleText'

describe('Article Entity', ()=>{
    let article: Article;
    beforeEach(()=>{
        const articleAuthor = new ArticleAuthor()
        article = new Article(ARTICLE_TEXT, articleAuthor)
    })
    it('getText() should return article\'s text', ()=>{
        expect(article.getText()).toBe(ARTICLE_TEXT)
    })
})