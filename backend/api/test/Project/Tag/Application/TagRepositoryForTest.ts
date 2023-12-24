import Tag from '../../../../src/Context/Project/Tag/Domain/Model/Tag';
import TagRepository from '../../../../src/Context/Project/Tag/Domain/Persistence/TagRepository';
import Id from '../../../../src/Context/Shared/Domain/ValueObject/Id';
import TagMother from '../TagMother';

class TagRepositoryForTest implements TagRepository {
    async list(pattern?: string | undefined): Promise<Tag[]> {
        pattern;
        this.listCalled = true;

        return [TagMother.TagToRead()];
    }
    public listCalled: boolean = false;

    async delete(id: Id): Promise<void> {
        id;
        this.deletedCalled = true;
    }
    public deletedCalled: boolean = false;

    async get(id: Id): Promise<Tag> {
        id;
        this.getCalled = true;

        return TagMother.TagToRead();
    }
    public getCalled: boolean = false;

    async create(tag: Tag): Promise<void> {
        tag;
        this.createdCalled = true;
    }
    public createdCalled: boolean = false;
}

export default TagRepositoryForTest;
