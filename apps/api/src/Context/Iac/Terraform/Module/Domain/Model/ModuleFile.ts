import Description from '../../../../../Shared/Domain/ValueObject/Description';
import FileName from '../../../../../Shared/Domain/ValueObject/FileName';
import Id from '../../../../../Shared/Domain/ValueObject/Id';
import Title from '../../../../../Shared/Domain/ValueObject/Title';

class ModuleFile {
    private constructor(
        public readonly id: Id,
        public readonly moduleId: Id,
        public readonly title: Title,
        public readonly description: Description,
        public readonly filename: FileName,
        public readonly createdAt: Date
    ) {}

    public static create(
        id: Id,
        moduleId: Id,
        title: Title,
        description: Description,
        filename: FileName,
        createdAt?: Date
    ): ModuleFile {
        let created: Date = new Date();
        if (createdAt !== undefined) {
            created = createdAt;
        }

        return new ModuleFile(
            id,
            moduleId,
            title,
            description,
            filename,
            created
        );
    }

    public toPrimitives(): {
        id: string;
        moduleId: string;
        title: string;
        description: string;
        filename: string;
        createdAt: Date;
    } {
        return {
            id: this.id.value,
            moduleId: this.moduleId.value,
            title: this.title.value,
            description: this.description.value,
            filename: this.filename.value,
            createdAt: this.createdAt,
        };
    }
}

export default ModuleFile;
