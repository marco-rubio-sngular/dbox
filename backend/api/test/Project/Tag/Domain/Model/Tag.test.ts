import Tag from '../../../../../src/Context/Project/Tag/Domain/Model/Tag';
import TagTitle from '../../../../../src/Context/Project/Tag/Domain/ValueObject/TagTitle';
import TagValue from '../../../../../src/Context/Project/Tag/Domain/ValueObject/TagValue';
import BadRequestException from '../../../../../src/Context/Shared/Domain/Exception/BadRequestException';
import Id from '../../../../../src/Context/Shared/Domain/ValueObject/Id';
import { SharedMother } from '../../../../Shared/SharedMother';
import TagMother from '../../TagMother';

describe('Tag model', () => {
    it('should create statically to create new tag, created at will be generated', () => {
        const sut: Tag = TagMother.TagToCreate();

        expect(sut.title).toBeInstanceOf(TagTitle);
        expect(sut.title.value).toStrictEqual(TagMother.TAG_TITLE);
        expect(sut.value).toBeInstanceOf(TagValue);
        expect(sut.value.value).toStrictEqual(TagMother.TAG_VALUE);
        expect(sut.createdAt).toBeInstanceOf(Date);
        expect(sut.id).toBeInstanceOf(Id);
        expect(sut.id.value).toStrictEqual(SharedMother.ID_VALUE);
    });

    it('should create statically to read existing tag, created at its required', () => {
        const sut: Tag = TagMother.TagToRead();

        expect(sut.title).toBeInstanceOf(TagTitle);
        expect(sut.title.value).toStrictEqual(TagMother.TAG_TITLE);
        expect(sut.value).toBeInstanceOf(TagValue);
        expect(sut.value.value).toStrictEqual(TagMother.TAG_VALUE);
        expect(sut.createdAt).toStrictEqual(TagMother.TAG_CREATED_AT);
        expect(sut.id.value).toStrictEqual(SharedMother.ID_VALUE);
    });

    it('should throw a bad request exception on invalid title', () => {
        expect(() => {
            TagMother.TagToRead(
                undefined,
                'a'.repeat(TagTitle.MINIMUM_LENGTH - 1)
            );
        }).toThrow(BadRequestException);
    });

    it('should throw a bad request exception on invalid tagValue', () => {
        expect(() => {
            TagMother.TagToRead(
                undefined,
                undefined,
                'a'.repeat(TagValue.MINIMUM_LENGTH - 1)
            );
        }).toThrow(BadRequestException);
    });

    it('should throw a bad request exception on invalid id', () => {
        expect(() => {
            TagMother.TagToRead(
                'non-valid-id',
                TagMother.TAG_TITLE,
                TagMother.TAG_VALUE
            );
        }).toThrow(BadRequestException);
    });
});
