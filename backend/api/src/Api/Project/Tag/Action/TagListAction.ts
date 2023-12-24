import { Request, Response } from 'express';
import HttpStatus from 'http-status';
import TagListRequest from '../../../../Context/Project/Tag/Application/List/TagListRequest';
import TagListResponse from '../../../../Context/Project/Tag/Application/List/TagListResponse';
import TagListService from '../../../../Context/Project/Tag/Application/List/TagListService';
import TagRepository from '../../../../Context/Project/Tag/Domain/Persistence/TagRepository';
import TagRepositoryMariaDB from '../../../../Context/Project/Tag/Infraestructure/Persistence/TagRepositoryMariaDB';
import { ApiAction } from '../../../../Context/Shared/Domain/Action/ApiAction';

const repository: TagRepository = new TagRepositoryMariaDB();
const service: TagListService = new TagListService(repository);

export class TagListAction implements ApiAction {
    async execute(req: Request, res: Response): Promise<void> {
        try {
            const request: TagListRequest = new TagListRequest(
                (req.query.pattern as string) || ''
            );
            const response: TagListResponse = await service.execute(request);

            res.status(HttpStatus.OK).send(response.toPrimitives());
        } catch (error) {
            res.status(HttpStatus.BAD_REQUEST).send((<Error>error).message);
        }
    }
}
