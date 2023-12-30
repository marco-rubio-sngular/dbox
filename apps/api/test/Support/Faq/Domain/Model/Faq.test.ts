import BadRequestException from '../../../../../src/Context/Shared/Domain/Exception/BadRequestException';
import Id from '../../../../../src/Context/Shared/Domain/ValueObject/Id';
import TitleBase64 from '../../../../../src/Context/Shared/Domain/ValueObject/TitleBase64';
import Faq from '../../../../../src/Context/Support/Faq/Domain/Model/Faq';
import Solution from '../../../../../src/Context/Support/Faq/Domain/ValueObject/Solution';
import { SharedMother } from '../../../../Shared/SharedMother';
import FaqMother from '../../FaqMother';

describe('Faq model', () => {
    it('should create statically to create new faq, created at will be generated', () => {
        const sut: Faq = FaqMother.FaqToCreate();

        expect(sut.title).toBeInstanceOf(TitleBase64);
        expect(sut.title.value).toStrictEqual(SharedMother.TITLE_BASE64_VALUE);
        expect(sut.solution).toBeInstanceOf(Solution);
        expect(sut.solution.value).toStrictEqual(
            SharedMother.LONG_TEXT_BASE64_VALUE
        );
        expect(sut.createdAt).toBeInstanceOf(Date);
        expect(sut.id).toBeInstanceOf(Id);
        expect(sut.id.value).toStrictEqual(SharedMother.ID_VALUE);
    });

    it('should create statically to read existing faq, created at its required', () => {
        const sut: Faq = FaqMother.FaqToRead();

        expect(sut.title).toBeInstanceOf(TitleBase64);
        expect(sut.title.value).toStrictEqual(SharedMother.TITLE_BASE64_VALUE);
        expect(sut.solution).toBeInstanceOf(Solution);
        expect(sut.solution.value).toStrictEqual(
            SharedMother.LONG_TEXT_BASE64_VALUE
        );
        expect(sut.createdAt).toStrictEqual(FaqMother.FAQ_CREATED_AT);
        expect(sut.id.value).toStrictEqual(SharedMother.ID_VALUE);
    });

    it('should throw a bad request exception on invalid title', () => {
        expect(() => {
            FaqMother.FaqToRead(undefined, 'no valid base64');
        }).toThrow(BadRequestException);
    });

    it('should throw a bad request exception on invalid solution', () => {
        expect(() => {
            FaqMother.FaqToRead(undefined, undefined, 'no valid base64');
        }).toThrow(BadRequestException);
    });

    it('should throw a bad request exception on invalid id', () => {
        expect(() => {
            FaqMother.FaqToRead('non-valid-id');
        }).toThrow(BadRequestException);
    });
});
