import FaqCreateResponse from '../../../../../src/Context/Support/Faq/Application/Create/FaqCreateResponse';
import SupportMother from '../../../SupportMother';

describe('FaqCreateResponse', () => {
    it('shoud create with an id', () => {
        const sut: FaqCreateResponse = SupportMother.FaqCreateResponse();

        expect(sut.id).toStrictEqual(SupportMother.FAQ_ID);
    });
});
