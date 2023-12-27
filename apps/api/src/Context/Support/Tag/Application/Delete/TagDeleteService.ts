import Id from '../../../../Shared/Domain/ValueObject/Id';
import TagRepository from '../../Domain/Persistence/TagRepository';
import TagDeleteRequest from './TagDeleteRequest';

class TagDeleteService {
    constructor(private readonly repository: TagRepository) {}

    async execute(request: TagDeleteRequest): Promise<void> {
        await this.repository.delete(new Id(request.id));
    }
}

export default TagDeleteService;
