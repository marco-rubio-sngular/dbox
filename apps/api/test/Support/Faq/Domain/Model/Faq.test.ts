import BadRequestException from '../../../../../src/Context/Shared/Domain/Exception/BadRequestException';
import Id from '../../../../../src/Context/Shared/Domain/ValueObject/Id';
import Title from '../../../../../src/Context/Shared/Domain/ValueObject/Title';
import Faq from '../../../../../src/Context/Support/Faq/Domain/Model/Faq';
import Solution from '../../../../../src/Context/Support/Faq/Domain/ValueObject/Solution';
import FaqMother from '../../../FaqMother';

describe('Faq model', () => {
    it('should create statically to create new faq, created at will be generated', () => {
        const sut: Faq = FaqMother.FaqToCreate();

        expect(sut.title).toBeInstanceOf(Title);
        expect(sut.title.value).toStrictEqual(FaqMother.FAQ_TITLE);
        expect(sut.solution).toBeInstanceOf(Solution);
        expect(sut.solution.value).toStrictEqual(FaqMother.FAQ_SOLUTION);
        expect(sut.createdAt).toBeInstanceOf(Date);
        expect(sut.id).toBeInstanceOf(Id);
        expect(sut.id.value).toStrictEqual(FaqMother.FAQ_ID);
    });

    it('should create statically to read existing faq, created at its required', () => {
        const sut: Faq = FaqMother.FaqToRead();

        expect(sut.title).toBeInstanceOf(Title);
        expect(sut.title.value).toStrictEqual(FaqMother.FAQ_TITLE);
        expect(sut.solution).toBeInstanceOf(Solution);
        expect(sut.solution.value).toStrictEqual(FaqMother.FAQ_SOLUTION);
        expect(sut.createdAt).toStrictEqual(FaqMother.FAQ_CREATED_AT);
        expect(sut.id.value).toStrictEqual(FaqMother.FAQ_ID);
    });

    it('should throw a bad request exception on invalid title', () => {
        expect(() => {
            FaqMother.FaqToRead(
                undefined,
                'a'.repeat(Title.MINIMUM_LENGTH - 1)
            );
        }).toThrow(BadRequestException);
    });

    it('should throw a bad request exception on invalid solution', () => {
        expect(() => {
            FaqMother.FaqToRead(
                undefined,
                undefined,
                'a'.repeat(Solution.MINIMUM_LENGTH - 1)
            );
        }).toThrow(BadRequestException);
    });

    it('should throw a bad request exception on invalid id', () => {
        expect(() => {
            FaqMother.FaqToRead(
                'non-valid-id',
                'a'.repeat(Title.MINIMUM_LENGTH - 1),
                'a'.repeat(Solution.MINIMUM_LENGTH - 1)
            );
        }).toThrow(BadRequestException);
    });
});
