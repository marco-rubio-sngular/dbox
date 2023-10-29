import FaqDeleteRequest from '../../../../../../src/Context/Support/Faq/Application/Delete/FaqDeleteRequest';
import SupportMother from '../../../../SupportMother';

describe('FaqDeleteRequest', () => {
    it('shoud create with an id', () => {
        const sut: FaqDeleteRequest = SupportMother.FaqDeleteRequest();

        expect(sut.id).toStrictEqual(SupportMother.FAQ_ID);
    });
});
