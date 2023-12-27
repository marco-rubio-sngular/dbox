import { Request, Response } from 'express';
import HttpStatus from 'http-status';
import ModuleDeleteRequest from '../../../Context/Iac/Terraform/Module/Application/Delete/ModuleDeleteRequest';
import ModuleDeleteService from '../../../Context/Iac/Terraform/Module/Application/Delete/ModuleDeleteService';
import ModuleRepository from '../../../Context/Iac/Terraform/Module/Domain/Persistence/ModuleRepository';
import ModuleRepositoryMariaDB from '../../../Context/Iac/Terraform/Module/Infraestructure/Persistence/ModuleRepositoryMariaDB';
import { ApiAction } from '../../../Context/Shared/Domain/Action/ApiAction';

const repository: ModuleRepository = new ModuleRepositoryMariaDB();
const service: ModuleDeleteService = new ModuleDeleteService(repository);

export class ModuleDeleteAction implements ApiAction {
    async execute(req: Request, res: Response): Promise<void> {
        const id: string = req.params.id;
        const request: ModuleDeleteRequest = new ModuleDeleteRequest(id);

        service
            .execute(request)
            .then(() => {
                res.status(HttpStatus.OK).json({
                    success: true,
                });
            })
            .catch((error) => {
                res.status(HttpStatus.BAD_REQUEST).json({
                    success: false,
                    message: (<Error>error).message,
                });
            });
    }
}
