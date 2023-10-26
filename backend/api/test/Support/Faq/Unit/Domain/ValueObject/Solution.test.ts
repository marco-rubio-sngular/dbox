import Solution from '../../../../../../src/Context/Support/Faq/Domain/ValueObject/Solution';
import SupportMother from '../../../../SupportMother';

describe('Solution', () => {
    it(`should create with valid value, min length ${Solution.MINIMUM_LENGTH}`, () => {
        expect(SupportMother.Solution().value).toStrictEqual(
            SupportMother.FAQ_SOLUTION
        );
    });
});
