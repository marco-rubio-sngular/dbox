import { Request, Response } from 'express';
import HttpStatus from 'http-status';
import { ApiAction } from '../../../Context/Shared/Domain/Action/ApiAction';
import FaqDeleteRequest from '../../../Context/Support/Faq/Application/Delete/FaqDeleteRequest';
import FaqDeleteService from '../../../Context/Support/Faq/Application/Delete/FaqDeleteService';
import FaqRepository from '../../../Context/Support/Faq/Domain/Persistence/FaqRepository';
import FaqRepositoryMariaDB from '../../../Context/Support/Faq/Infraestructure/Persistence/FaqRepositoryMariaDB';

const repository: FaqRepository = new FaqRepositoryMariaDB();
const service: FaqDeleteService = new FaqDeleteService(repository);

export class FaqDeleteAction implements ApiAction {
    async execute(req: Request, res: Response): Promise<void> {
        const id: string = req.params.id;
        const request: FaqDeleteRequest = new FaqDeleteRequest(id);

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
