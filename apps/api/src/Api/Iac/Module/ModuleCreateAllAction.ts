import { Request, Response } from 'express';
import { Base64 } from 'js-base64';
import { v4 as uuidv4 } from 'uuid';
import ModuleCreateRequest from '../../../Context/Iac/Terraform/Module/Application/Create/ModuleCreateRequest';
import ModuleCreateResponse from '../../../Context/Iac/Terraform/Module/Application/Create/ModuleCreateResponse';
import ModuleCreateService from '../../../Context/Iac/Terraform/Module/Application/Create/ModuleCreateService';
import ModuleFileCreateRequest from '../../../Context/Iac/Terraform/Module/Application/CreateFile/ModuleFileCreateRequest';
import ModuleFileCreateService from '../../../Context/Iac/Terraform/Module/Application/CreateFile/ModuleFileCreateService';
import ModuleRepository from '../../../Context/Iac/Terraform/Module/Domain/Persistence/ModuleRepository';
import ModuleRepositoryMariaDB from '../../../Context/Iac/Terraform/Module/Infraestructure/Persistence/ModuleRepositoryMariaDB';
import { ApiAction } from '../../../Context/Shared/Domain/Action/ApiAction';
import BaseApiAction from '../../../Context/Shared/Domain/Action/BaseAction';
import Base64ImageWriter from '../../../Context/Shared/Domain/Lib/Base64ImageWriter';
import { createBasedirIntoCdnDirIfNotExists } from '../../../Context/Shared/Domain/Lib/FsTools';
import Base64ImageWriterNodeBase64Image from '../../../Context/Shared/Infraestructure/Base64ImageWriterNodeBase64Image';
import { getModuleFileUrl } from '../../helpers';

const repository: ModuleRepository = new ModuleRepositoryMariaDB();
const service: ModuleCreateService = new ModuleCreateService(repository);
const imagener: Base64ImageWriter = new Base64ImageWriterNodeBase64Image();
const serviceFiles: ModuleFileCreateService = new ModuleFileCreateService(
    repository,
    imagener
);

export class ModuleCreateAllAction extends BaseApiAction implements ApiAction {
    async execute(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        try {
            const id = uuidv4();
            createBasedirIntoCdnDirIfNotExists(id);

            const request: ModuleCreateRequest = new ModuleCreateRequest(
                id,
                req.body.title,
                req.body.description
            );

            const response: ModuleCreateResponse =
                await service.execute(request);

            req.params.moduleId = id;
            const responseData = {
                id: response.id,
                mainFile: '',
                variablesFile: '',
                outputsFile: '',
            };
            if (req.body.module_main) {
                const requestFile: ModuleFileCreateRequest =
                    new ModuleFileCreateRequest(
                        uuidv4(),
                        id,
                        Base64.encode('module main file'),
                        Base64.encode('module main tf file content'),
                        'main.tf',
                        req.body.module_main
                    );

                await serviceFiles.execute(requestFile);
                responseData.mainFile = getModuleFileUrl(
                    req,
                    id,
                    requestFile.id
                );
            }
            if (req.body.module_variables) {
                const requestFile: ModuleFileCreateRequest =
                    new ModuleFileCreateRequest(
                        uuidv4(),
                        id,
                        Base64.encode('module variables file'),
                        Base64.encode('module variables tf file content'),
                        'variables.tf',
                        req.body.module_variables
                    );

                await serviceFiles.execute(requestFile);
                responseData.variablesFile = getModuleFileUrl(
                    req,
                    id,
                    requestFile.id
                );
            }
            if (req.body.module_outputs) {
                const requestFile: ModuleFileCreateRequest =
                    new ModuleFileCreateRequest(
                        uuidv4(),
                        id,
                        Base64.encode('module outputs file'),
                        Base64.encode('module outputs tf file content'),
                        'outputs.tf',
                        req.body.module_outputs
                    );

                await serviceFiles.execute(requestFile);
                responseData.outputsFile = getModuleFileUrl(
                    req,
                    id,
                    requestFile.id
                );
            }

            this.success(res, responseData);
        } catch (error) {
            this.failed(res, <Error>error);
        }
    }
}
