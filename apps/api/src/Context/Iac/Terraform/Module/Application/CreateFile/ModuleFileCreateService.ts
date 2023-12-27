import Base64ImageWriter from '../../../../../Shared/Domain/Lib/Base64ImageWriter';
import { createBasedirIntoCdnDirIfNotExists } from '../../../../../Shared/Domain/Lib/FsTools';
import Description from '../../../../../Shared/Domain/ValueObject/Description';
import Id from '../../../../../Shared/Domain/ValueObject/Id';
import Title from '../../../../../Shared/Domain/ValueObject/Title';
import ModuleFile from '../../Domain/Model/ModuleFile';
import ModuleRepository from '../../Domain/Persistence/ModuleRepository';
import ModuleFileCreateRequest from './ModuleFileCreateRequest';
import ModuleFileCreateResponse from './ModuleFileCreateResponse';

class ModuleFileCreateService {
    constructor(
        private readonly repository: ModuleRepository,
        private readonly imagener: Base64ImageWriter
    ) {}

    async execute(
        request: ModuleFileCreateRequest
    ): Promise<ModuleFileCreateResponse> {
        createBasedirIntoCdnDirIfNotExists(request.moduleId);

        await this.imagener.write(
            request.base64File,
            request.moduleId + '/' + request.id,
            'tf'
        );
        const moduleFile: ModuleFile =
            this.createModuleFileFromRequest(request);

        await this.repository.createFile(moduleFile);

        return new ModuleFileCreateResponse(moduleFile.id.value);
    }

    private createModuleFileFromRequest(
        request: ModuleFileCreateRequest
    ): ModuleFile {
        return ModuleFile.create(
            new Id(request.id),
            new Id(request.moduleId),
            new Title(request.title),
            new Description(request.description)
        );
    }
}

export default ModuleFileCreateService;
