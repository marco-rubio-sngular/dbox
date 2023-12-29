import Id from '../../../../../Shared/Domain/ValueObject/Id';
import ModuleRepository from '../../Domain/Persistence/ModuleRepository';
import ModuleListFilesRequest from './ModuleListFilesRequest';
import ModuleListFilesResponse from './ModuleListFilesResponse';

class ModuleListFilesService {
    constructor(private readonly repository: ModuleRepository) {}

    async execute(
        request: ModuleListFilesRequest
    ): Promise<ModuleListFilesResponse> {
        ModuleListFilesRequest;
        const list = await this.repository.listFiles(
            new Id(request.moduleId),
            request.pattern
        );

        return new ModuleListFilesResponse(list);
    }
}

export default ModuleListFilesService;
