import LimitedString from '../../../../../src/Context/Shared/Domain/ValueObject/LimitedString';
import { SharedMother } from '../../../SharedMother';

describe('Title', () => {
    it('should be a LimitedString with standard length (visit:LimitedString)', () => {
        expect(SharedMother.Title()).toBeInstanceOf(LimitedString);
    });
});
