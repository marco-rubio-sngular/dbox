import Id from '../../../../../Shared/Domain/ValueObject/Id';
import Module from '../../Domain/Model/Module';
import ModuleRepository from '../../Domain/Persistence/ModuleRepository';
import ModuleGetRequest from './ModuleGetRequest';

class ModuleGetService {
    constructor(private readonly repository: ModuleRepository) {}

    async execute(request: ModuleGetRequest): Promise<Module> {
        const module: Module = await this.repository.get(new Id(request.id));

        return module;
    }
}

export default ModuleGetService;
