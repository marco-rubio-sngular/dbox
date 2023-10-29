import FaqDeleteRequest from '../../../../../../src/Context/Support/Faq/Application/Delete/FaqDeleteRequest';
import FaqDeleteService from '../../../../../../src/Context/Support/Faq/Application/Delete/FaqDeleteService';
import SupportMother from '../../../../SupportMother';
import FaqRepositoryForTest from '../FaqRepositoryForTest';

const respository: FaqRepositoryForTest = new FaqRepositoryForTest();
const request: FaqDeleteRequest = SupportMother.FaqDeleteRequest();
const sut: FaqDeleteService = SupportMother.FaqDeleteService(respository);

describe('FaqDeleteService', () => {
    it('shoud delete a faq', async () => {
        await sut.execute(request);

        expect(respository.deletedCalled).toBeTruthy();
    });
});
