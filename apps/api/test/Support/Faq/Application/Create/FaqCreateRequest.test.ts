import FaqCreateRequest from '../../../../../src/Context/Support/Faq/Application/Create/FaqCreateRequest';
import FaqMother from '../../../FaqMother';

describe('FaqCreateRequest', () => {
    it('shoud create with an id, title and solution as string', () => {
        const sut: FaqCreateRequest = FaqMother.FaqCreateRequest();

        expect(sut.id).toStrictEqual(FaqMother.FAQ_ID);
        expect(sut.title).toStrictEqual(FaqMother.FAQ_TITLE);
        expect(sut.solution).toStrictEqual(FaqMother.FAQ_SOLUTION);
    });
});
