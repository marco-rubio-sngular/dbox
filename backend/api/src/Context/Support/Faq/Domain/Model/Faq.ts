import Title from '../../../../Shared/Domain/ValueObject/Title';
import FaqSolution from '../ValueObject/FaqSolution';

class Faq {
    private constructor(
        public readonly title: Title,
        public readonly solution: FaqSolution,
        public readonly createdAt: Date
    ) {}

    public static toCreate(title: Title, solution: FaqSolution): Faq {
        return new Faq(title, solution, new Date());
    }

    public static toRead(
        title: Title,
        solution: FaqSolution,
        createdAt: Date
    ): Faq {
        return new Faq(title, solution, createdAt);
    }
}

export default Faq;
