import {Comment} from "./Comment";
import {ArticleAuthor} from "../article/ArticleAuthor";
import {CommentAuthor} from "./CommentAuthor";
import {Article} from "../article/Article";

const COMMENT_TEXT = 'commentText'

describe('Comment entity', ()=>{
    let comment:Comment
    beforeEach(()=>{
        comment = new Comment(COMMENT_TEXT, new Article('', new ArticleAuthor()), new CommentAuthor())
    })

    it('getText() should return comment text', () => {
        expect(comment.getText()).toBe(COMMENT_TEXT)
    })
})