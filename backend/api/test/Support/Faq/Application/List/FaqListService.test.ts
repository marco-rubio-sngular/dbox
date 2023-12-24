import FaqListRequest from '../../../../../src/Context/Support/Faq/Application/List/FaqListRequest';
import FaqListResponse from '../../../../../src/Context/Support/Faq/Application/List/FaqListResponse';
import FaqListService from '../../../../../src/Context/Support/Faq/Application/List/FaqListService';
import SupportMother from '../../../SupportMother';
import FaqRepositoryForTest from '../FaqRepositoryForTest';

const respository: FaqRepositoryForTest = new FaqRepositoryForTest();
const request: FaqListRequest = SupportMother.FaqListRequest();
const sut: FaqListService = SupportMother.FaqListService(respository);

describe('FaqListService', () => {
    it('shoud list a faqs', async() => {
        const response: FaqListResponse = await sut.execute(request);

        expect(response).toBeInstanceOf(FaqListResponse);
        expect(response.list.length).toBe(1);
        expect(response.list[0]).toStrictEqual(SupportMother.FaqToRead());
        expect(respository.listCalled).toBeTruthy();
    });
});
