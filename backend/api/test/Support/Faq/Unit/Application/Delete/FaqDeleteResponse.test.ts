import FaqDeleteResponse from '../../../../../../src/Context/Support/Faq/Application/Delete/FaqDeleteResponse';
import SupportMother from '../../../../SupportMother';

describe('FaqDeleteResponse', () => {
    it('shoud create with an id, title, solution and createdAt', () => {
        const sut: FaqDeleteResponse = SupportMother.FaqDeleteResponse();

        expect(sut.id).toStrictEqual(SupportMother.FAQ_ID);
        expect(sut.title).toStrictEqual(SupportMother.FAQ_TITLE);
        expect(sut.solution).toStrictEqual(SupportMother.FAQ_SOLUTION);
        expect(sut.createdAt).toStrictEqual(SupportMother.FAQ_CREATED_AT);
    });
});
