import FaqDeleteResponse from '../../../../../src/Context/Support/Faq/Application/Delete/FaqDeleteResponse';
import FaqMother from '../../../FaqMother';

describe('FaqDeleteResponse', () => {
    it('shoud create with an id, title, solution and createdAt', () => {
        const sut: FaqDeleteResponse = FaqMother.FaqDeleteResponse();

        expect(sut.id).toStrictEqual(FaqMother.FAQ_ID);
        expect(sut.title).toStrictEqual(FaqMother.FAQ_TITLE);
        expect(sut.solution).toStrictEqual(FaqMother.FAQ_SOLUTION);
        expect(sut.createdAt).toStrictEqual(FaqMother.FAQ_CREATED_AT);
    });
});
