import TagDeleteRequest from '../../../../../src/Context/Project/Tag/Application/Delete/TagDeleteRequest';
import { SharedMother } from '../../../../Shared/SharedMother';
import TagMother from '../../TagMother';

describe('TagDeleteRequest', () => {
    it('shoud create with an id', () => {
        const sut: TagDeleteRequest = TagMother.TagDeleteRequest();

        expect(sut.id).toStrictEqual(SharedMother.ID_VALUE);
    });
});
