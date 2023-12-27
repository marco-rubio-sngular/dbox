import { Request, Response } from 'express';
import HttpStatus from 'http-status';
import ModuleListFilesRequest from '../../../Context/Iac/Terraform/Module/Application/ListFiles/ModuleListFilesRequest';
import ModuleListFilesResponse from '../../../Context/Iac/Terraform/Module/Application/ListFiles/ModuleListFilesResponse';
import ModuleListFilesService from '../../../Context/Iac/Terraform/Module/Application/ListFiles/ModuleListService';
import ModuleRepository from '../../../Context/Iac/Terraform/Module/Domain/Persistence/ModuleRepository';
import ModuleRepositoryMariaDB from '../../../Context/Iac/Terraform/Module/Infraestructure/Persistence/ModuleRepositoryMariaDB';
import { ApiAction } from '../../../Context/Shared/Domain/Action/ApiAction';

const repository: ModuleRepository = new ModuleRepositoryMariaDB();
const service: ModuleListFilesService = new ModuleListFilesService(repository);

export class ModuleListFilesAction implements ApiAction {
    async execute(req: Request, res: Response): Promise<void> {
        try {
            const request: ModuleListFilesRequest = new ModuleListFilesRequest(
                req.params.moduleId,
                (req.query.pattern as string) || ''
            );
            const response: ModuleListFilesResponse =
                await service.execute(request);

            res.status(HttpStatus.OK).json({
                success: true,
                total: response.list.length,
                list: response.toPrimitives(),
            });
        } catch (error) {
            res.status(HttpStatus.BAD_REQUEST).send((<Error>error).message);
        }
    }
}
