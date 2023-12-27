import ModuleFile from '../../Domain/Model/ModuleFile';

class ModuleListFilesResponse {
    constructor(public readonly list: ModuleFile[]) {}

    toPrimitives(): {
        id: string;
        moduleId: string;
        title: string;
        description: string;
        createdAt: Date;
    }[] {
        return this.list.map((item) => {
            return item.toPrimitives();
        });
    }
}

export default ModuleListFilesResponse;
