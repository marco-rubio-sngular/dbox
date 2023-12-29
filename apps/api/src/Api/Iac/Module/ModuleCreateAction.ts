import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import ModuleCreateRequest from '../../../Context/Iac/Terraform/Module/Application/Create/ModuleCreateRequest';
import ModuleCreateService from '../../../Context/Iac/Terraform/Module/Application/Create/ModuleCreateService';
import ModuleRepository from '../../../Context/Iac/Terraform/Module/Domain/Persistence/ModuleRepository';
import ModuleRepositoryMariaDB from '../../../Context/Iac/Terraform/Module/Infraestructure/Persistence/ModuleRepositoryMariaDB';
import { ApiAction } from '../../../Context/Shared/Domain/Action/ApiAction';
import BaseApiAction from '../../../Context/Shared/Domain/Action/BaseAction';
import { createBasedirIntoCdnDirIfNotExists } from '../../../Context/Shared/Domain/Lib/FsTools';

const repository: ModuleRepository = new ModuleRepositoryMariaDB();
const service: ModuleCreateService = new ModuleCreateService(repository);

export class ModuleCreateAction extends BaseApiAction implements ApiAction {
    async execute(req: Request, res: Response): Promise<void> {
        try {
            const id = uuidv4();
            createBasedirIntoCdnDirIfNotExists(id);

            const request: ModuleCreateRequest = new ModuleCreateRequest(
                id,
                req.body.title,
                req.body.description
            );

            await service.execute(request);

            this.success(res, {
                ...request,
                description: this.decode(request.description),
            });
        } catch (error) {
            this.failed(res, <Error>error);
        }
    }
}
