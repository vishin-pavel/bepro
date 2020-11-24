import {Visitor} from "./Visitor";
import {Article} from "../article/Article";
import {ArticleAuthor} from "../article/ArticleAuthor";
import {CommentAuthor} from "../comment/CommentAuthor";
import {Comment} from "../comment/Comment";

const VISITOR_ID = 'visitorId'

describe('Visitor entity', () => {
    let visitor: Visitor
    beforeEach(() => {
        visitor = new Visitor()
        visitor.id = VISITOR_ID
    })

    it('readArticle() should return article text', () => {
        const article = new Article('text', new ArticleAuthor())
        expect(visitor.readArticle(article)).toBe('text')
    })

    it('writeArticle() should create new Article', function () {
        const newArticle = visitor.writeArticle('text')
        expect(newArticle).toBeInstanceOf(Article)
        expect(newArticle.getText()).toBe('text')
    });

    it('commentArticle() should create new Comment assigned to Article', () => {
        const author = new ArticleAuthor()
        const article = new Article('text', author)
        article.id = 'abc'
        const comment = visitor.commentArticle(article, 'commentText')
        expect(comment.getText()).toBe('commentText')
        expect(comment.author).toBeInstanceOf(CommentAuthor)
        expect(comment.author.id).toBe(VISITOR_ID)
    })

    it('readComment() should return comment text', () => {
        const comment = new Comment('commentText', new Article('articleText', new ArticleAuthor()), new CommentAuthor())
        expect(visitor.readComment(comment)).toBe('commentText')
    })
})