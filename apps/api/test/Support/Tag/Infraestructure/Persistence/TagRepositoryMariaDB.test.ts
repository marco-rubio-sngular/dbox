import NotFoundException from '../../../../../src/Context/Shared/Domain/Exception/NotFoundException';
import Id from '../../../../../src/Context/Shared/Domain/ValueObject/Id';
import TagCreateRequest from '../../../../../src/Context/Support/Tag/Application/Create/TagCreateRequest';
import TagCreateService from '../../../../../src/Context/Support/Tag/Application/Create/TagCreateService';
import Tag from '../../../../../src/Context/Support/Tag/Domain/Model/Tag';
import TagRepository from '../../../../../src/Context/Support/Tag/Domain/Persistence/TagRepository';
import TagRepositoryMariaDB from '../../../../../src/Context/Support/Tag/Infraestructure/Persistence/TagRepositoryMariaDB';
import { SharedMother } from '../../../../Shared/SharedMother';
import TagMother from '../../TagMother';

const tags: TagRepository = new TagRepositoryMariaDB();
const creator: TagCreateService = TagMother.TagCreateService(tags);
const createRequest: TagCreateRequest = TagMother.TagCreateRequest();

describe('TagCreateService', () => {
    it('shoud create a tag', () => {
        expect(async() => {
            await creator.execute(createRequest);

            await tags.delete(new Id(createRequest.id));
        }).not.toThrow();
    });

    it('shoud get an existing tag', () => {
        expect(async() => {
            await creator.execute(createRequest);

            const tag: Tag = await tags.get(new Id(createRequest.id));

            expect(SharedMother.ID_VALUE).toStrictEqual(tag.id.value);

            await tags.delete(new Id(createRequest.id));
        });
    });

    it('shoud delete an existing tag', () => {
        async() => {
            await creator.execute(createRequest);
            await tags.delete(new Id(createRequest.id));

            try {
                await tags.get(new Id(createRequest.id));
            } catch (error) {
                expect(error).toBeInstanceOf(NotFoundException);
            }
        };
    });

    it('shoud list tags without pattern', () => {
        expect(async() => {
            await creator.execute(createRequest);

            const tag: Tag = await tags.get(new Id(createRequest.id));

            expect(SharedMother.ID_VALUE).toStrictEqual(tag.id.value);

            await tags.delete(new Id(createRequest.id));
        });
    });
});
