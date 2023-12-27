import { Request, Response } from 'express';
import HttpStatus from 'http-status';
import { v4 as uuidv4 } from 'uuid';
import { ApiAction } from '../../../Context/Shared/Domain/Action/ApiAction';
import TagCreateRequest from '../../../Context/Support/Tag/Application/Create/TagCreateRequest';
import TagCreateService from '../../../Context/Support/Tag/Application/Create/TagCreateService';
import TagRepository from '../../../Context/Support/Tag/Domain/Persistence/TagRepository';
import TagRepositoryMariaDB from '../../../Context/Support/Tag/Infraestructure/Persistence/TagRepositoryMariaDB';

const repository: TagRepository = new TagRepositoryMariaDB();
const service: TagCreateService = new TagCreateService(repository);

export class TagCreateAction implements ApiAction {
    async execute(req: Request, res: Response): Promise<void> {
        console.log(req.body);

        try {
            const request: TagCreateRequest = new TagCreateRequest(
                uuidv4(),
                req.body.title,
                req.body.value
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
