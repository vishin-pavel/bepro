import {CommentAuthorAdapter} from "./CommentAuthorAdapter";
import {Visitor} from "./Visitor";
import {CommentAuthor} from "../comment/CommentAuthor";

describe('CommentAuthorAdapter', () => {
    let adapter: CommentAuthorAdapter

    beforeEach(() => {
        adapter = new CommentAuthorAdapter()
    })

    it('getAuthor() should convert Visitor to CommentAuthor', () => {
        const visitor = new Visitor()
        expect(visitor).toBeInstanceOf(Visitor)
        const author = CommentAuthorAdapter.getAuthor(visitor)
        expect(author).toBeInstanceOf(CommentAuthor)
    })
})