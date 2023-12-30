import FaqCreateRequest from '../../../../../src/Context/Support/Faq/Application/Create/FaqCreateRequest';
import { SharedMother } from '../../../../Shared/SharedMother';
import FaqMother from '../../FaqMother';

describe('FaqCreateRequest', () => {
    it('shoud create with an id, title and solution as string', () => {
        const sut: FaqCreateRequest = FaqMother.FaqCreateRequest();

        expect(sut.id).toStrictEqual(SharedMother.ID_VALUE);
        expect(sut.title).toStrictEqual(SharedMother.TITLE_BASE64_VALUE);
        expect(sut.solution).toStrictEqual(SharedMother.LONG_TEXT_BASE64_VALUE);
    });
});
