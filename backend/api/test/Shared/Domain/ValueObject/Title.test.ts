import Title from '../../../../src/Context/Shared/Domain/ValueObject/Title';
import { SharedMother } from '../../SharedMother';

describe('Title', () => {
    it('should be a LimitedString', () => {
        expect(SharedMother.Title()).toBeInstanceOf(Title);
    });
});
