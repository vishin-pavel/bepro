import {ArticleAuthorAdapter} from "./ArticleAuthorAdapter";
import {Visitor} from "./Visitor";
import {ArticleAuthor} from "../article/ArticleAuthor";

describe('ArticleAuthorAdapter', () => {
    let adapter: ArticleAuthorAdapter

    beforeEach(() => {
        adapter = new ArticleAuthorAdapter()
    })

    it('getAuthor() should convert Visitor to ArticleAuthor', () => {
        const visitor = new Visitor()
        expect(visitor).toBeInstanceOf(Visitor)
        const author = ArticleAuthorAdapter.getAuthor(visitor)
        expect(author).toBeInstanceOf(ArticleAuthor)
    })
})