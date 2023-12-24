import TagCreateRequest from '../../../../../src/Context/Project/Tag/Application/Create/TagCreateRequest';
import { SharedMother } from '../../../../Shared/SharedMother';
import TagMother from '../../TagMother';

describe('TagCreateRequest', () => {
    it('shoud create with an id, title and tagValue as string', () => {
        const sut: TagCreateRequest = TagMother.TagCreateRequest();

        expect(sut.id).toStrictEqual(SharedMother.ID_VALUE);
        expect(sut.title).toStrictEqual(TagMother.TAG_TITLE);
        expect(sut.value).toStrictEqual(TagMother.TAG_VALUE);
    });
});
