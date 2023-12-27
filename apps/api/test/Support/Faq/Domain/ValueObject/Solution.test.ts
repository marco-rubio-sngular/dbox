import Solution from '../../../../../src/Context/Support/Faq/Domain/ValueObject/Solution';
import FaqMother from '../../../FaqMother';

describe('Solution', () => {
    it(`should create with valid value, min length ${Solution.MINIMUM_LENGTH}`, () => {
        expect(FaqMother.Solution().value).toStrictEqual(
            FaqMother.FAQ_SOLUTION
        );
    });
});
