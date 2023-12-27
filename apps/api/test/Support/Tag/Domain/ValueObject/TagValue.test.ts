import TagValue from '../../../../../src/Context/Support/Tag/Domain/ValueObject/TagValue';
import TagMother from '../../TagMother';

describe('TagValue', () => {
    it(`should create with valid value, min length ${TagValue.MINIMUM_LENGTH}`, () => {
        expect(TagMother.TagValue().value).toStrictEqual(TagMother.TAG_VALUE);
    });
});
