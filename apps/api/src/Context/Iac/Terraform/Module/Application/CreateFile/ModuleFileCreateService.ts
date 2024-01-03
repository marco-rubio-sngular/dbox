import Base64ImageWriter from '../../../../../Shared/Domain/Lib/Base64ImageWriter';
import Description from '../../../../../Shared/Domain/ValueObject/Description';
import FileName from '../../../../../Shared/Domain/ValueObject/FileName';
import Id from '../../../../../Shared/Domain/ValueObject/Id';
import TitleBase64 from '../../../../../Shared/Domain/ValueObject/TitleBase64';
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
        const examplePathAddon: string = request.filename.startsWith('example')
            ? '/examples'
            : '';
        await this.imagener.write(
            request.base64File,
            request.moduleId + examplePathAddon + '/' + request.id,
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
            new TitleBase64(request.title),
            new Description(request.description),
            new FileName(request.filename)
        );
    }
}

export default ModuleFileCreateService;
