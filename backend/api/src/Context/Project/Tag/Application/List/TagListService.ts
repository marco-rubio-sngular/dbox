import TagRepository from '../../Domain/Persistence/TagRepository';
import TagListRequest from './TagListRequest';
import TagListResponse from './TagListResponse';

class TagListService {
    constructor(private readonly repository: TagRepository) {}

    async execute(request: TagListRequest): Promise<TagListResponse> {
        const list = await this.repository.list(request.pattern);

        return new TagListResponse(list);
    }
}

export default TagListService;
