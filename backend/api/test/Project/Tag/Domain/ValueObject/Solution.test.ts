import TagValue from '../../../../../src/Context/Project/Tag/Domain/ValueObject/TagValue';
import TagMother from '../../TagMother';

describe('Solution', () => {
    it(`should create with valid value, min length ${TagValue.MINIMUM_LENGTH}`, () => {
        expect(TagMother.TagValue().value).toStrictEqual(TagMother.TAG_VALUE);
    });
});
