import Description from '../../../../../Shared/Domain/ValueObject/Description';
import Id from '../../../../../Shared/Domain/ValueObject/Id';
import TitleBase64 from '../../../../../Shared/Domain/ValueObject/TitleBase64';

class Module {
    private constructor(
        public readonly id: Id,
        public readonly title: TitleBase64,
        public readonly description: Description,
        public readonly createdAt: Date
    ) {}

    public static create(
        id: Id,
        title: TitleBase64,
        description: Description,
        createdAt?: Date
    ): Module {
        let created: Date = new Date();
        if (createdAt !== undefined) {
            created = createdAt;
        }

        return new Module(id, title, description, created);
    }

    public toPrimitives(): {
        id: string;
        title: string;
        description: string;
        createdAt: Date;
    } {
        return {
            id: this.id.value,
            title: this.title.value,
            description: this.description.value,
            createdAt: this.createdAt,
        };
    }
}

export default Module;
