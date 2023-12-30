import { SharedMother } from '../../../../Shared/SharedMother';
import FaqMother from '../../FaqMother';

describe('Solution', () => {
    it(`should create with valid value,base64`, () => {
        expect(FaqMother.Solution().value).toStrictEqual(
            SharedMother.LONG_TEXT_BASE64_VALUE
        );
    });
});
