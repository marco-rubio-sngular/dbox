import Id from '../../../../Shared/Domain/ValueObject/Id';
import Tag from '../../Domain/Model/Tag';
import TagRepository from '../../Domain/Persistence/TagRepository';
import TagTitle from '../../Domain/ValueObject/TagTitle';
import TagValue from '../../Domain/ValueObject/TagValue';
import TagCreateRequest from './TagCreateRequest';
import TagCreateResponse from './TagCreateResponse';

class TagCreateService {
    constructor(private readonly repository: TagRepository) {}

    async execute(request: TagCreateRequest): Promise<TagCreateResponse> {
        const tag: Tag = this.createTagFromRequest(request);

        await this.repository.create(tag);

        return new TagCreateResponse(tag.id.value);
    }

    private createTagFromRequest(request: TagCreateRequest): Tag {
        return Tag.create(
            new Id(request.id),
            new TagTitle(request.title),
            new TagValue(request.value)
        );
    }
}

export default TagCreateService;
