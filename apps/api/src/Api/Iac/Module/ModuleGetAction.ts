import { Request, Response } from 'express';
import HttpStatus from 'http-status';
import ModuleGetRequest from '../../../Context/Iac/Terraform/Module/Application/Get/ModuleGetRequest';
import ModuleGetService from '../../../Context/Iac/Terraform/Module/Application/Get/ModuleGetService';
import ModuleListFilesRequest from '../../../Context/Iac/Terraform/Module/Application/ListFiles/ModuleListFilesRequest';
import ModuleListFilesService from '../../../Context/Iac/Terraform/Module/Application/ListFiles/ModuleListService';
import Module from '../../../Context/Iac/Terraform/Module/Domain/Model/Module';
import ModuleRepository from '../../../Context/Iac/Terraform/Module/Domain/Persistence/ModuleRepository';
import ModuleRepositoryMariaDB from '../../../Context/Iac/Terraform/Module/Infraestructure/Persistence/ModuleRepositoryMariaDB';
import { ApiAction } from '../../../Context/Shared/Domain/Action/ApiAction';
import BaseApiAction from '../../../Context/Shared/Domain/Action/BaseAction';

const repository: ModuleRepository = new ModuleRepositoryMariaDB();
const service: ModuleGetService = new ModuleGetService(repository);
const filesService: ModuleListFilesService = new ModuleListFilesService(
    repository
);

export class ModuleGetAction extends BaseApiAction implements ApiAction {
    async execute(req: Request, res: Response): Promise<void> {
        try {
            const request: ModuleGetRequest = new ModuleGetRequest(
                req.params.id
            );

            const module: Module = await service.execute(request);
            const files = await filesService.execute(
                new ModuleListFilesRequest(module.id.value)
            );

            const moduleRaw = module.toPrimitives();
            moduleRaw.description = await this.decode(moduleRaw.description);

            res.status(HttpStatus.OK).json({
                success: true,
                module: moduleRaw,
                files: files.toPrimitives().map((item) => {
                    return { moduleName: module.title.value, ...item };
                }),
            });
        } catch (error) {
            res.status(HttpStatus.BAD_REQUEST).json({
                success: false,
                message: (<Error>error).message,
            });
        }
    }
}
