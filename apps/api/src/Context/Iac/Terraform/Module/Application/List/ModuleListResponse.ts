import Module from '../../Domain/Model/Module';

class ModuleListResponse {
    constructor(public readonly list: Module[]) {}

    toPrimitives(): {
        id: string;
        title: string;
        description: string;
        createdAt: Date;
    }[] {
        return this.list.map((item) => {
            return item.toPrimitives();
        });
    }
}

export default ModuleListResponse;
