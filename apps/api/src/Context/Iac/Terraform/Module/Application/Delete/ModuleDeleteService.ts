import Id from '../../../../../Shared/Domain/ValueObject/Id';
import ModuleRepository from '../../Domain/Persistence/ModuleRepository';
import ModuleDeleteRequest from './ModuleDeleteRequest';

class ModuleDeleteService {
    constructor(private readonly repository: ModuleRepository) {}

    async execute(request: ModuleDeleteRequest): Promise<void> {
        await this.repository.delete(new Id(request.id));
    }
}

export default ModuleDeleteService;
