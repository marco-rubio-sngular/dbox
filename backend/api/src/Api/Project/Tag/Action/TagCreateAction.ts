import { Request, Response } from 'express';
import HttpStatus from 'http-status';
import { v4 as uuidv4 } from 'uuid';
import TagCreateRequest from '../../../../Context/Project/Tag/Application/Create/TagCreateRequest';
import TagCreateService from '../../../../Context/Project/Tag/Application/Create/TagCreateService';
import TagRepository from '../../../../Context/Project/Tag/Domain/Persistence/TagRepository';
import TagRepositoryMariaDB from '../../../../Context/Project/Tag/Infraestructure/Persistence/TagRepositoryMariaDB';
import { ApiAction } from '../../../../Context/Shared/Domain/Action/ApiAction';

const repository: TagRepository = new TagRepositoryMariaDB();
const service: TagCreateService = new TagCreateService(repository);

export class TagCreateAction implements ApiAction {
    async execute(req: Request, res: Response): Promise<void> {
        try {
            const request: TagCreateRequest = new TagCreateRequest(
                uuidv4(),
                req.body.title,
                req.body.value
            );

            await service.execute(request);

            res.status(HttpStatus.CREATED).send();
        } catch (error) {
            res.status(HttpStatus.BAD_REQUEST).send((<Error>error).message);
        }
    }
}
