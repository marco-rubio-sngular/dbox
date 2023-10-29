import FaqListRequest from '../../../../../../src/Context/Support/Faq/Application/List/FaqListRequest';
import FaqListService from '../../../../../../src/Context/Support/Faq/Application/List/FaqListService';
import SupportMother from '../../../../SupportMother';
import FaqRepositoryForTest from '../FaqRepositoryForTest';

const respository: FaqRepositoryForTest = new FaqRepositoryForTest();
const request: FaqListRequest = SupportMother.FaqListRequest();
const sut: FaqListService = SupportMother.FaqListService(respository);

describe('FaqListService', () => {
    it('shoud list a faqs', async () => {
        await sut.execute(request);

        expect(respository.listCalled).toBeTruthy();
    });
});
