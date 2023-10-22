import Title from '../../src/Context/Shared/Domain/ValueObject/Title';
import Faq from '../../src/Context/Support/Faq/Domain/Model/Faq';
import FaqSolution from '../../src/Context/Support/Faq/Domain/ValueObject/FaqSolution';

export class SupportMother {
    public static FAQ_TITLE: string = 'any faq title';
    public static FAQ_SOLUTION: string = 'any faq solution';
    public static FAQ_CREATED_AT: Date = new Date();

    public static FaqToCreate(): Faq {
        return Faq.toCreate(
            new Title(SupportMother.FAQ_TITLE),
            new FaqSolution(SupportMother.FAQ_SOLUTION)
        );
    }

    public static FaqToRead(): Faq {
        return Faq.toRead(
            new Title(SupportMother.FAQ_TITLE),
            new FaqSolution(SupportMother.FAQ_SOLUTION),
            SupportMother.FAQ_CREATED_AT
        );
    }
}
