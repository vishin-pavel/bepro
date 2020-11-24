import {ArticleAuthor} from "./ArticleAuthor";
import {Article} from "./Article";

describe('ArticleAuthor entity', () => {
    let author: ArticleAuthor
    beforeEach(()=>{
        author = new ArticleAuthor()
    })
    it('delete() should delete article', () => {
        const article = new Article('some text', author)
        expect(article.deleted).toBe(false)
        author.delete(article)
        expect(article.deleted).toBe(true)
    })
})