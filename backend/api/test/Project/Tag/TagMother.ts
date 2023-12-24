import TagCreateRequest from '../../../src/Context/Project/Tag/Application/Create/TagCreateRequest';
import TagCreateResponse from '../../../src/Context/Project/Tag/Application/Create/TagCreateResponse';
import TagCreateService from '../../../src/Context/Project/Tag/Application/Create/TagCreateService';
import TagDeleteRequest from '../../../src/Context/Project/Tag/Application/Delete/TagDeleteRequest';
import TagDeleteResponse from '../../../src/Context/Project/Tag/Application/Delete/TagDeleteResponse';
import TagDeleteService from '../../../src/Context/Project/Tag/Application/Delete/TagDeleteService';
import TagListRequest from '../../../src/Context/Project/Tag/Application/List/TagListRequest';
import TagListResponse from '../../../src/Context/Project/Tag/Application/List/TagListResponse';
import TagListService from '../../../src/Context/Project/Tag/Application/List/TagListService';
import Tag from '../../../src/Context/Project/Tag/Domain/Model/Tag';
import TagRepository from '../../../src/Context/Project/Tag/Domain/Persistence/TagRepository';
import TagValue from '../../../src/Context/Project/Tag/Domain/ValueObject/TagValue';
import { SharedMother } from '../../Shared/SharedMother';

class TagMother {
    public static TAG_CREATED_AT: Date = new Date();
    public static TAG_PATTERN: string = 'aaa';
    public static TAG_VALUE: string = 'a'.repeat(TagValue.MINIMUM_LENGTH);

    public static TagListService(repository: TagRepository): TagListService {
        return new TagListService(repository);
    }

    public static TagDeleteService(
        repository: TagRepository
    ): TagDeleteService {
        return new TagDeleteService(repository);
    }

    public static TagCreateService(
        repository: TagRepository
    ): TagCreateService {
        return new TagCreateService(repository);
    }

    public static TagDeleteResponse(): TagDeleteResponse {
        return new TagDeleteResponse(
            SharedMother.ID_VALUE,
            SharedMother.TITLE_VALUE,
            TagMother.TAG_VALUE,
            TagMother.TAG_CREATED_AT
        );
    }

    public static TagDeleteRequest(): TagDeleteRequest {
        return new TagDeleteRequest(SharedMother.ID_VALUE);
    }

    public static TagCreateResponse(): TagCreateResponse {
        return new TagCreateResponse(SharedMother.ID_VALUE);
    }

    public static TagListRequest(): TagListRequest {
        return new TagListRequest(TagMother.TAG_PATTERN);
    }

    public static TagListResponse(): TagListResponse {
        return new TagListResponse([]);
    }

    public static TagCreateRequest(id?: string): TagCreateRequest {
        return new TagCreateRequest(
            id !== undefined ? id : SharedMother.Id().value,
            SharedMother.Title().value,
            TagMother.TagValue().value
        );
    }

    public static TagToCreate(): Tag {
        return Tag.create(
            SharedMother.Id(),
            SharedMother.Title(),
            TagMother.TagValue()
        );
    }

    public static TagToRead(id?: string, title?: string, value?: string): Tag {
        return Tag.create(
            SharedMother.Id(id),
            SharedMother.Title(title),
            TagMother.TagValue(value),
            TagMother.TAG_CREATED_AT
        );
    }

    public static TagValue(value?: string): TagValue {
        return new TagValue(value !== undefined ? value : TagMother.TAG_VALUE);
    }
}

export default TagMother;
