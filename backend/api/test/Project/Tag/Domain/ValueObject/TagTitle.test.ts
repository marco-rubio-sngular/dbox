import TagTitle from '../../../../../src/Context/Project/Tag/Domain/ValueObject/TagTitle';
import BadRequestException from '../../../../../src/Context/Shared/Domain/Exception/BadRequestException';
import TagMother from '../../TagMother';

describe('TagTitle', () => {
    it(`should must create only with letters, length between ${TagTitle.MINIMUM_LENGTH} - ${TagTitle.MAXIMUM_LENGTH}`, () => {
        expect(TagMother.TagTitle().value).toStrictEqual(TagMother.TAG_TITLE);
    });

    it(`should throw error if not contain only letters`, () => {
        expect(() => {
            new TagTitle('ab123');
        }).toThrow(BadRequestException);
        expect(() => {
            new TagTitle('abc-def');
        }).toThrow(BadRequestException);
        expect(() => {
            new TagTitle('abc ef');
        }).toThrow(BadRequestException);
    });
});
