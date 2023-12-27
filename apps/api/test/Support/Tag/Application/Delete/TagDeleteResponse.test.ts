import TagDeleteResponse from '../../../../../src/Context/Support/Tag/Application/Delete/TagDeleteResponse';
import { SharedMother } from '../../../../Shared/SharedMother';
import TagMother from '../../TagMother';

describe('TagDeleteResponse', () => {
    it('shoud create with an id, title, tagValue and createdAt', () => {
        const sut: TagDeleteResponse = TagMother.TagDeleteResponse();

        expect(sut.id).toStrictEqual(SharedMother.ID_VALUE);
        expect(sut.title).toStrictEqual(TagMother.TAG_TITLE);
        expect(sut.value).toStrictEqual(TagMother.TAG_VALUE);
        expect(sut.createdAt).toStrictEqual(TagMother.TAG_CREATED_AT);
    });
});
