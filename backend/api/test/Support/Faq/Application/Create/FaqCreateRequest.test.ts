import FaqCreateRequest from '../../../../../src/Context/Support/Faq/Application/Create/FaqCreateRequest';
import SupportMother from '../../../SupportMother';

describe('FaqCreateRequest', () => {
    it('shoud create with an id, title and solution as string', () => {
        const sut: FaqCreateRequest = SupportMother.FaqCreateRequest();

        expect(sut.id).toStrictEqual(SupportMother.FAQ_ID);
        expect(sut.title).toStrictEqual(SupportMother.FAQ_TITLE);
        expect(sut.solution).toStrictEqual(SupportMother.FAQ_SOLUTION);
    });
});
