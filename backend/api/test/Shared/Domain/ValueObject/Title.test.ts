import { LimitedString } from '../../../../src/Context/Shared/Domain/ValueObject/LimitedString';
import { SharedMother } from '../../SharedMother';

describe('Title', () => {
    it('should be a LimitedString with its length limits', () => {
        expect(SharedMother.Title()).toBeInstanceOf(LimitedString);
        expect(SharedMother.Title().value).toStrictEqual(
            SharedMother.TITLE_VALUE
        );
    });
});
