import FaqCreateRequest from '../../../../../src/Context/Support/Faq/Application/Create/FaqCreateRequest';
import FaqCreateService from '../../../../../src/Context/Support/Faq/Application/Create/FaqCreateService';
import Faq from '../../../../../src/Context/Support/Faq/Domain/Model/Faq';
import SupportMother from '../../../SupportMother';
import FaqRepository from '../../Domain/Persistence/FaqRepository';

class FaqRepositoryForTest implements FaqRepository {
    public createdCalled: boolean = false;

    create(faq: Faq): void {
        this.createdCalled = true;
    }

    public createdMustBeCalled(): boolean {
        return this.createdCalled;
    }
}

describe('FaqCreateService', () => {
    it('shoud create a faq', () => {
        const respository: FaqRepositoryForTest = new FaqRepositoryForTest();
        const request: FaqCreateRequest = SupportMother.FaqCreateRequest();

        const sut: FaqCreateService =
            SupportMother.FaqCreateService(respository);
        sut.execute(request);

        expect(respository.createdMustBeCalled()).toBeTruthy();
    });
});
