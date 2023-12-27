import Id from '../../../../Shared/Domain/ValueObject/Id';
import Tag from '../Model/Tag';

interface TagRepository {
    create(tag: Tag): Promise<void>;
    delete(id: Id): Promise<void>;
    get(id: Id): Promise<Tag>;
    list(pattern?: string): Promise<Tag[]>;
}

export default TagRepository;
