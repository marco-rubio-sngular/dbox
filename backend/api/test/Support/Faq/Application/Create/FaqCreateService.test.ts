import FaqCreateRequest from '../../../../../src/Context/Support/Faq/Application/Create/FaqCreateRequest';
import FaqCreateResponse from '../../../../../src/Context/Support/Faq/Application/Create/FaqCreateResponse';
import FaqCreateService from '../../../../../src/Context/Support/Faq/Application/Create/FaqCreateService';
import SupportMother from '../../../SupportMother';
import FaqRepositoryForTest from '../FaqRepositoryForTest';

const respository: FaqRepositoryForTest = new FaqRepositoryForTest();
const request: FaqCreateRequest = SupportMother.FaqCreateRequest();
const sut: FaqCreateService = SupportMother.FaqCreateService(respository);

describe('FaqCreateService', () => {
    it('shoud create a faq', async() => {
        await sut.execute(request);

        expect(respository.createdCalled).toBeTruthy();
    });

    it('shoud result a response with create faq id', async() => {
        const result: FaqCreateResponse = await sut.execute(request);

        expect(result.id).toStrictEqual(SupportMother.FAQ_ID);
    });
});
