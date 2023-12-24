import TagCreateRequest from '../../../../../src/Context/Project/Tag/Application/Create/TagCreateRequest';
import TagCreateResponse from '../../../../../src/Context/Project/Tag/Application/Create/TagCreateResponse';
import TagCreateService from '../../../../../src/Context/Project/Tag/Application/Create/TagCreateService';
import { SharedMother } from '../../../../Shared/SharedMother';
import TagMother from '../../TagMother';
import TagRepositoryForTest from '../TagRepositoryForTest';

const respository: TagRepositoryForTest = new TagRepositoryForTest();
const request: TagCreateRequest = TagMother.TagCreateRequest();
const sut: TagCreateService = TagMother.TagCreateService(respository);

describe('TagCreateService', () => {
    it('shoud create a tag', async() => {
        await sut.execute(request);

        expect(respository.createdCalled).toBeTruthy();
    });

    it('shoud result a response with create tag id', async() => {
        const result: TagCreateResponse = await sut.execute(request);

        expect(result.id).toStrictEqual(SharedMother.ID_VALUE);
    });
});
