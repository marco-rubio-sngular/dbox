import TagListRequest from '../../../../../src/Context/Support/Tag/Application/List/TagListRequest';
import TagListResponse from '../../../../../src/Context/Support/Tag/Application/List/TagListResponse';
import TagListService from '../../../../../src/Context/Support/Tag/Application/List/TagListService';
import TagMother from '../../TagMother';
import TagRepositoryForTest from '../TagRepositoryForTest';

const respository: TagRepositoryForTest = new TagRepositoryForTest();
const request: TagListRequest = TagMother.TagListRequest();
const sut: TagListService = TagMother.TagListService(respository);

describe('TagListService', () => {
    it('shoud list a tags', async () => {
        const response: TagListResponse = await sut.execute(request);

        expect(response).toBeInstanceOf(TagListResponse);
        expect(response.list.length).toBe(1);
        expect(response.list[0]).toStrictEqual(TagMother.TagToRead());
        expect(respository.listCalled).toBeTruthy();
    });
});
