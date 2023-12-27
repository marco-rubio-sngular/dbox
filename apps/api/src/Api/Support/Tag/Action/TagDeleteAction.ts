import { Request, Response } from 'express';
import HttpStatus from 'http-status';
import { ApiAction } from '../../../../Context/Shared/Domain/Action/ApiAction';
import TagDeleteRequest from '../../../../Context/Support/Tag/Application/Delete/TagDeleteRequest';
import TagDeleteService from '../../../../Context/Support/Tag/Application/Delete/TagDeleteService';
import TagRepository from '../../../../Context/Support/Tag/Domain/Persistence/TagRepository';
import TagRepositoryMariaDB from '../../../../Context/Support/Tag/Infraestructure/Persistence/TagRepositoryMariaDB';

const repository: TagRepository = new TagRepositoryMariaDB();
const service: TagDeleteService = new TagDeleteService(repository);

export class TagDeleteAction implements ApiAction {
    async execute(req: Request, res: Response): Promise<void> {
        const id: string = req.params.id;
        const request: TagDeleteRequest = new TagDeleteRequest(id);

        service
            .execute(request)
            .then((response) => {
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
