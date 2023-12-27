import FaqCreateResponse from '../../../../../src/Context/Support/Faq/Application/Create/FaqCreateResponse';
import FaqMother from '../../../FaqMother';

describe('FaqCreateResponse', () => {
    it('shoud create with an id', () => {
        const sut: FaqCreateResponse = FaqMother.FaqCreateResponse();

        expect(sut.id).toStrictEqual(FaqMother.FAQ_ID);
    });
});
