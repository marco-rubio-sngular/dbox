import { Request, Response } from 'express';
import HttpStatus from 'http-status';
import { v4 as uuidv4 } from 'uuid';
import ModuleFileCreateRequest from '../../../Context/Iac/Terraform/Module/Application/CreateFile/ModuleFileCreateRequest';
import ModuleFileCreateService from '../../../Context/Iac/Terraform/Module/Application/CreateFile/ModuleFileCreateService';
import ModuleRepository from '../../../Context/Iac/Terraform/Module/Domain/Persistence/ModuleRepository';
import ModuleRepositoryMariaDB from '../../../Context/Iac/Terraform/Module/Infraestructure/Persistence/ModuleRepositoryMariaDB';
import { ApiAction } from '../../../Context/Shared/Domain/Action/ApiAction';
import Base64ImageWriter from '../../../Context/Shared/Domain/Lib/Base64ImageWriter';
import Base64ImageWriterNodeBase64Image from '../../../Context/Shared/Infraestructure/Base64ImageWriterNodeBase64Image';
import { getModuleFileUrl } from '../../helpers';

const imagener: Base64ImageWriter = new Base64ImageWriterNodeBase64Image();
const repository: ModuleRepository = new ModuleRepositoryMariaDB();
const service: ModuleFileCreateService = new ModuleFileCreateService(
    repository,
    imagener
);

export class ModuleFileCreateAction implements ApiAction {
    async execute(req: Request, res: Response): Promise<void> {
        try {
            const moduleId: string = req.params.moduleId;
            const request: ModuleFileCreateRequest =
                new ModuleFileCreateRequest(
                    uuidv4(),
                    moduleId,
                    req.body.title,
                    req.body.description,
                    req.body.content
                );

            await service.execute(request);

            res.status(HttpStatus.CREATED).json({
                success: true,
                message: {
                    id: request.id,
                    url: getModuleFileUrl(req, moduleId, request.id),
                },
            });
        } catch (error) {
            res.status(HttpStatus.BAD_REQUEST).send((<Error>error).message);
        }
    }
}
