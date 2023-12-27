import FaqListRequest from '../../../../../src/Context/Support/Faq/Application/List/FaqListRequest';
import FaqListResponse from '../../../../../src/Context/Support/Faq/Application/List/FaqListResponse';
import FaqListService from '../../../../../src/Context/Support/Faq/Application/List/FaqListService';
import FaqMother from '../../../FaqMother';
import FaqRepositoryForTest from '../FaqRepositoryForTest';

const respository: FaqRepositoryForTest = new FaqRepositoryForTest();
const request: FaqListRequest = FaqMother.FaqListRequest();
const sut: FaqListService = FaqMother.FaqListService(respository);

describe('FaqListService', () => {
    it('shoud list a faqs', async() => {
        const response: FaqListResponse = await sut.execute(request);

        expect(response).toBeInstanceOf(FaqListResponse);
        expect(response.list.length).toBe(1);
        expect(response.list[0]).toStrictEqual(FaqMother.FaqToRead());
        expect(respository.listCalled).toBeTruthy();
    });
});
