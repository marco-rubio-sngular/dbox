import TagListRequest from '../../../../../src/Context/Support/Tag/Application/List/TagListRequest';
import TagMother from '../../TagMother';

describe('TagListRequest', () => {
    it('shoud create with an optionally pattern string', () => {
        const sut: TagListRequest = TagMother.TagListRequest();

        expect(sut.pattern).toStrictEqual(TagMother.TAG_PATTERN);
    });
});
