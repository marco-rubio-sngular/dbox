import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';
import fs from 'fs';
import ModuleGetFileRequest from '../../../Context/Iac/Terraform/Module/Application/GetFile/ModuleGetFileRequest';
import ModuleGetFileService from '../../../Context/Iac/Terraform/Module/Application/GetFile/ModuleGetFileService';
import ModuleFile from '../../../Context/Iac/Terraform/Module/Domain/Model/ModuleFile';
import ModuleRepository from '../../../Context/Iac/Terraform/Module/Domain/Persistence/ModuleRepository';
import ModuleRepositoryMariaDB from '../../../Context/Iac/Terraform/Module/Infraestructure/Persistence/ModuleRepositoryMariaDB';
import { ApiAction } from '../../../Context/Shared/Domain/Action/ApiAction';
import BaseApiAction from '../../../Context/Shared/Domain/Action/BaseAction';
import { cdnDir } from '../../../Context/Shared/Domain/Lib/FsTools';

const repository: ModuleRepository = new ModuleRepositoryMariaDB();
const service: ModuleGetFileService = new ModuleGetFileService(repository);

export class ModuleFileGetAction extends BaseApiAction implements ApiAction {
    async execute(req: Request, res: Response): Promise<void> {
        try {
            const request: ModuleGetFileRequest = new ModuleGetFileRequest(
                req.params.fileId
            );
            const response: ModuleFile = await service.execute(request);
            const examplePathAddon: string = response.filename.value.startsWith(
                'example'
            )
                ? '/examples'
                : '';

            const content = fs.readFileSync(
                cdnDir +
                    req.params.moduleId +
                    examplePathAddon +
                    '/' +
                    response.id.value +
                    '.tf'
            );
            res.status(HttpStatusCode.Ok).json(content.toString());
        } catch (error) {
            this.failed(res, error as Error);
        }
    }
}
