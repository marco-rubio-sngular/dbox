import Id from '../../../../../Shared/Domain/ValueObject/Id';
import Module from '../Model/Module';
import ModuleFile from '../Model/ModuleFile';

interface ModuleRepository {
    create(module: Module): Promise<void>;
    createFile(moduleFile: ModuleFile): Promise<void>;
    delete(id: Id): Promise<void>;
    deleteFile(id: Id): Promise<void>;
    get(id: Id): Promise<Module>;
    getFile(id: Id): Promise<ModuleFile>;
    list(pattern?: string): Promise<Module[]>;
    listFiles(moduleId: Id, pattern?: string): Promise<ModuleFile[]>;
}

export default ModuleRepository;
