import { Request, Response } from 'express';
import HttpStatus from 'http-status';
import ModuleListRequest from '../../../Context/Iac/Terraform/Module/Application/List/ModuleListRequest';
import ModuleListResponse from '../../../Context/Iac/Terraform/Module/Application/List/ModuleListResponse';
import ModuleListService from '../../../Context/Iac/Terraform/Module/Application/List/ModuleListService';
import ModuleRepository from '../../../Context/Iac/Terraform/Module/Domain/Persistence/ModuleRepository';
import ModuleRepositoryMariaDB from '../../../Context/Iac/Terraform/Module/Infraestructure/Persistence/ModuleRepositoryMariaDB';
import { ApiAction } from '../../../Context/Shared/Domain/Action/ApiAction';

const repository: ModuleRepository = new ModuleRepositoryMariaDB();
const service: ModuleListService = new ModuleListService(repository);

export class ModuleListAction implements ApiAction {
    async execute(req: Request, res: Response): Promise<void> {
        try {
            const request: ModuleListRequest = new ModuleListRequest(
                (req.query.pattern as string) || ''
            );
            const response: ModuleListResponse = await service.execute(request);

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
