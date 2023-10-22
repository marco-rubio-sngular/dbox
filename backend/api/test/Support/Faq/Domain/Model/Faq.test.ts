import Title from '../../../../../src/Context/Shared/Domain/ValueObject/Title';
import Faq from '../../../../../src/Context/Support/Faq/Domain/Model/Faq';
import FaqSolution from '../../../../../src/Context/Support/Faq/Domain/ValueObject/FaqSolution';
import { SupportMother } from '../../../SupportMother';
describe('Faq model', () => {
    it('should create statically to create new faq, created at will be now', () => {
        const sut: Faq = SupportMother.FaqToCreate();

        expect(sut.title).toBeInstanceOf(Title);
        expect(sut.title.value).toStrictEqual(SupportMother.FAQ_TITLE);
        expect(sut.solution).toBeInstanceOf(FaqSolution);
        expect(sut.solution.value).toStrictEqual(SupportMother.FAQ_SOLUTION);
        expect(sut.createdAt).toBeInstanceOf(Date);
        expect(sut.createdAt).not.toStrictEqual(SupportMother.FAQ_CREATED_AT);
    });

    it('should create statically to read existing faq, created at its required', () => {
        const sut: Faq = SupportMother.FaqToRead();

        expect(sut.title).toBeInstanceOf(Title);
        expect(sut.title.value).toStrictEqual(SupportMother.FAQ_TITLE);
        expect(sut.solution).toBeInstanceOf(FaqSolution);
        expect(sut.solution.value).toStrictEqual(SupportMother.FAQ_SOLUTION);
        expect(sut.createdAt).toStrictEqual(SupportMother.FAQ_CREATED_AT);
    });
});
