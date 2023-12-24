import TagCreateResponse from '../../../../../src/Context/Project/Tag/Application/Create/TagCreateResponse';
import { SharedMother } from '../../../../Shared/SharedMother';
import TagMother from '../../TagMother';

describe('TagCreateResponse', () => {
    it('shoud create with an id', () => {
        const sut: TagCreateResponse = TagMother.TagCreateResponse();

        expect(sut.id).toStrictEqual(SharedMother.ID_VALUE);
    });
});
