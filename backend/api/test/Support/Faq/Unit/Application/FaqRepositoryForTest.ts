import Id from '../../../../../src/Context/Shared/Domain/ValueObject/Id';
import Faq from '../../../../../src/Context/Support/Faq/Domain/Model/Faq';
import FaqRepository from '../../../../../src/Context/Support/Faq/Domain/Persistence/FaqRepository';
import SupportMother from '../../../SupportMother';

class FaqRepositoryForTest implements FaqRepository {
    async list(pattern?: string | undefined): Promise<Faq[]> {
        pattern;
        this.listCalled = true;

        return [];
    }
    public listCalled: boolean = false;

    async delete(id: Id): Promise<void> {
        id;
        this.deletedCalled = true;
    }
    public deletedCalled: boolean = false;

    async get(id: Id): Promise<Faq> {
        id;
        this.getCalled = true;

        return SupportMother.FaqToRead();
    }
    public getCalled: boolean = false;

    async create(faq: Faq): Promise<void> {
        faq;
        this.createdCalled = true;
    }
    public createdCalled: boolean = false;
}

export default FaqRepositoryForTest;
