import Tags from '../../../../src/Context/Shared/Domain/ValueObject/Tags';
import { SharedMother } from '../../SharedMother';

describe('Tags', () => {
    it('should be comma separated strings, a tag must contain only letters', () => {
        const sut: Tags = SharedMother.Tags();

        expect(sut.value).toStrictEqual(SharedMother.TAGS_VALUE);
        expect(sut.total).toStrictEqual(2);
    });

    xit('should throw a bad request exception on empty value', () => {
        const sut: Tags = SharedMother.Tags();

        expect(sut.value).toStrictEqual(SharedMother.TAGS_VALUE);
        expect(sut.total).toStrictEqual(2);
    });
});
