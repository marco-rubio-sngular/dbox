import Id from '../../../../Shared/Domain/ValueObject/Id';
import TitleBase64 from '../../../../Shared/Domain/ValueObject/TitleBase64';
import Solution from '../ValueObject/Solution';

class Faq {
    private constructor(
        public readonly id: Id,
        public readonly title: TitleBase64,
        public readonly solution: Solution,
        public readonly createdAt: Date
    ) {}

    public static create(
        id: Id,
        title: TitleBase64,
        solution: Solution,
        createdAt?: Date
    ): Faq {
        let created: Date = new Date();
        if (createdAt !== undefined) {
            created = createdAt;
        }

        return new Faq(id, title, solution, created);
    }

    public toPrimitives(): {
        id: string;
        title: string;
        solution: string;
        createdAt: Date;
    } {
        return {
            id: this.id.value,
            title: this.title.value,
            solution: this.solution.value,
            createdAt: this.createdAt,
        };
    }
}

export default Faq;
