import FaqCreateRequest from '../../../../../../src/Context/Support/Faq/Application/Create/FaqCreateRequest';
import FaqCreateResponse from '../../../../../../src/Context/Support/Faq/Application/Create/FaqCreateResponse';
import FaqCreateService from '../../../../../../src/Context/Support/Faq/Application/Create/FaqCreateService';
import Faq from '../../../../../../src/Context/Support/Faq/Domain/Model/Faq';
import FaqRepository from '../../../../../../src/Context/Support/Faq/Domain/Persistence/FaqRepository';
import SupportMother from '../../../../SupportMother';

class FaqRepositoryForTest implements FaqRepository {
    public createdCalled: boolean = false;

    async create(faq: Faq): Promise<void> {
        this.createdCalled = true;

        return;
    }

    public createdMustBeCalled(): boolean {
        return this.createdCalled;
    }
}

const respository: FaqRepositoryForTest = new FaqRepositoryForTest();
const request: FaqCreateRequest = SupportMother.FaqCreateRequest();
const sut: FaqCreateService = SupportMother.FaqCreateService(respository);

describe('FaqCreateService', () => {
    it('shoud create a faq', async () => {
        await sut.execute(request);

        expect(respository.createdMustBeCalled()).toBeTruthy();
    });

    it('shoud result a response with create faq id', async () => {
        const result: FaqCreateResponse = await sut.execute(request);

        expect(result.id).toStrictEqual(SupportMother.FAQ_ID);
    });
});
