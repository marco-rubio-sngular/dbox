import Id from '../../../../../Shared/Domain/ValueObject/Id';
import ModuleFile from '../../Domain/Model/ModuleFile';
import ModuleRepository from '../../Domain/Persistence/ModuleRepository';
import ModuleGetRequest from './ModuleGetFileRequest';

class ModuleGetFileService {
    constructor(private readonly repository: ModuleRepository) {}

    async execute(request: ModuleGetRequest): Promise<ModuleFile> {
        const module: ModuleFile = await this.repository.getFile(
            new Id(request.id)
        );

        return module;
    }
}

export default ModuleGetFileService;
