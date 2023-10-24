import Id from '../../../../Shared/Domain/ValueObject/Id';
import Title from '../../../../Shared/Domain/ValueObject/Title';
import Solution from '../ValueObject/Solution';

class Faq {
    private constructor(
        public readonly id: Id,
        public readonly title: Title,
        public readonly solution: Solution,
        public readonly createdAt: Date
    ) {}

    public static toCreate(id: Id, title: Title, solution: Solution): Faq {
        return new Faq(id, title, solution, new Date());
    }

    public static toRead(
        id: Id,
        title: Title,
        solution: Solution,
        createdAt: Date
    ): Faq {
        return new Faq(id, title, solution, createdAt);
    }
}

export default Faq;
