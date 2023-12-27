import TagDeleteRequest from '../../../../../src/Context/Support/Tag/Application/Delete/TagDeleteRequest';
import TagDeleteService from '../../../../../src/Context/Support/Tag/Application/Delete/TagDeleteService';
import TagMother from '../../TagMother';
import TagRepositoryForTest from '../TagRepositoryForTest';

const respository: TagRepositoryForTest = new TagRepositoryForTest();
const request: TagDeleteRequest = TagMother.TagDeleteRequest();
const sut: TagDeleteService = TagMother.TagDeleteService(respository);

describe('TagDeleteService', () => {
    it('shoud delete a tag', async() => {
        await sut.execute(request);

        expect(respository.deletedCalled).toBeTruthy();
    });
});
