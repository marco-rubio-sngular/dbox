import { Request, Response } from 'express';
import HttpStatus from 'http-status';
import { v4 as uuidv4 } from 'uuid';
import ModuleCreateRequest from '../../../Context/Iac/Terraform/Module/Application/Create/ModuleCreateRequest';
import ModuleCreateService from '../../../Context/Iac/Terraform/Module/Application/Create/ModuleCreateService';
import ModuleRepository from '../../../Context/Iac/Terraform/Module/Domain/Persistence/ModuleRepository';
import ModuleRepositoryMariaDB from '../../../Context/Iac/Terraform/Module/Infraestructure/Persistence/ModuleRepositoryMariaDB';
import { ApiAction } from '../../../Context/Shared/Domain/Action/ApiAction';

const repository: ModuleRepository = new ModuleRepositoryMariaDB();
const service: ModuleCreateService = new ModuleCreateService(repository);

export class ModuleCreateAction implements ApiAction {
    async execute(req: Request, res: Response): Promise<void> {
        try {
            const request: ModuleCreateRequest = new ModuleCreateRequest(
                uuidv4(),
                req.body.title,
                req.body.description
            );

            await service.execute(request);

            res.status(HttpStatus.CREATED).json({
                success: true,
                message: { ...request },
            });
        } catch (error) {
            res.status(HttpStatus.BAD_REQUEST).send((<Error>error).message);
        }
    }
}
