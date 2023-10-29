import FaqListRequest from '../../../../../../src/Context/Support/Faq/Application/List/FaqListRequest';
import SupportMother from '../../../../SupportMother';

describe('FaqListRequest', () => {
    it('shoud create with an optionally pattern string', () => {
        const sut: FaqListRequest = SupportMother.FaqListRequest();

        expect(sut.pattern).toStrictEqual(SupportMother.FAQ_PATTERN);
    });
});
