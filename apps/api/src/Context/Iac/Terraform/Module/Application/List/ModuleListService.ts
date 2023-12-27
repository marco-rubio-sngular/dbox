import ModuleRepository from '../../Domain/Persistence/ModuleRepository';
import ModuleListRequest from './ModuleListRequest';
import ModuleListResponse from './ModuleListResponse';

class ModuleListService {
    constructor(private readonly repository: ModuleRepository) {}

    async execute(request: ModuleListRequest): Promise<ModuleListResponse> {
        const list = await this.repository.list(request.pattern);

        return new ModuleListResponse(list);
    }
}

export default ModuleListService;
