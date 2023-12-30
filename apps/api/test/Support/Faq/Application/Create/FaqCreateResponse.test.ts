import FaqCreateResponse from '../../../../../src/Context/Support/Faq/Application/Create/FaqCreateResponse';
import { SharedMother } from '../../../../Shared/SharedMother';
import FaqMother from '../../FaqMother';

describe('FaqCreateResponse', () => {
    it('shoud create with an id', () => {
        const sut: FaqCreateResponse = FaqMother.FaqCreateResponse();

        expect(sut.id).toStrictEqual(SharedMother.ID_VALUE);
    });
});
