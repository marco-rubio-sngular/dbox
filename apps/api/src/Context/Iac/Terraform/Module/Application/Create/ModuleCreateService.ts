import Description from '../../../../../Shared/Domain/ValueObject/Description';
import Id from '../../../../../Shared/Domain/ValueObject/Id';
import TitleBase64 from '../../../../../Shared/Domain/ValueObject/TitleBase64';
import Module from '../../Domain/Model/Module';
import ModuleRepository from '../../Domain/Persistence/ModuleRepository';
import ModuleCreateRequest from './ModuleCreateRequest';
import ModuleCreateResponse from './ModuleCreateResponse';

class ModuleCreateService {
    constructor(private readonly repository: ModuleRepository) {}

    async execute(request: ModuleCreateRequest): Promise<ModuleCreateResponse> {
        const module: Module = this.createModuleFromRequest(request);

        await this.repository.create(module);

        return new ModuleCreateResponse(module.id.value);
    }

    private createModuleFromRequest(request: ModuleCreateRequest): Module {
        return Module.create(
            new Id(request.id),
            new TitleBase64(request.title),
            new Description(request.description)
        );
    }
}

export default ModuleCreateService;
