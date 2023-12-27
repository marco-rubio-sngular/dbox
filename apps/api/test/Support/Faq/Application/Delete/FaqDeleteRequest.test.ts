import FaqDeleteRequest from '../../../../../src/Context/Support/Faq/Application/Delete/FaqDeleteRequest';
import FaqMother from '../../../FaqMother';

describe('FaqDeleteRequest', () => {
    it('shoud create with an id', () => {
        const sut: FaqDeleteRequest = FaqMother.FaqDeleteRequest();

        expect(sut.id).toStrictEqual(FaqMother.FAQ_ID);
    });
});
