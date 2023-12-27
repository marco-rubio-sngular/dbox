import { Request, Response } from 'express';
import HttpStatus from 'http-status';
import { ApiAction } from '../../../Context/Shared/Domain/Action/ApiAction';
import TagListRequest from '../../../Context/Support/Tag/Application/List/TagListRequest';
import TagListResponse from '../../../Context/Support/Tag/Application/List/TagListResponse';
import TagListService from '../../../Context/Support/Tag/Application/List/TagListService';
import TagRepository from '../../../Context/Support/Tag/Domain/Persistence/TagRepository';
import TagRepositoryMariaDB from '../../../Context/Support/Tag/Infraestructure/Persistence/TagRepositoryMariaDB';

const repository: TagRepository = new TagRepositoryMariaDB();
const service: TagListService = new TagListService(repository);

export class TagListAction implements ApiAction {
    async execute(req: Request, res: Response): Promise<void> {
        try {
            const request: TagListRequest = new TagListRequest(
                (req.query.pattern as string) || ''
            );
            const response: TagListResponse = await service.execute(request);

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
