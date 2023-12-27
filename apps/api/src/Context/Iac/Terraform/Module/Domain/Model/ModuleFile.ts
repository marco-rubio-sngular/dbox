import Description from '../../../../../Shared/Domain/ValueObject/Description';
import Id from '../../../../../Shared/Domain/ValueObject/Id';
import Title from '../../../../../Shared/Domain/ValueObject/Title';

class ModuleFile {
    private constructor(
        public readonly id: Id,
        public readonly moduleId: Id,
        public readonly title: Title,
        public readonly description: Description,
        public readonly createdAt: Date
    ) {}

    public static create(
        id: Id,
        moduleId: Id,
        title: Title,
        description: Description,
        createdAt?: Date
    ): ModuleFile {
        let created: Date = new Date();
        if (createdAt !== undefined) {
            created = createdAt;
        }

        return new ModuleFile(id, moduleId, title, description, created);
    }

    public toPrimitives(): {
        id: string;
        moduleId: string;
        title: string;
        description: string;
        createdAt: Date;
        } {
        return {
            id: this.id.value,
            moduleId: this.moduleId.value,
            title: this.title.value,
            description: this.description.value,
            createdAt: this.createdAt,
        };
    }
}

export default ModuleFile;
