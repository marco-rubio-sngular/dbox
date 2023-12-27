import { Request, Response } from 'express';
import HttpStatus from 'http-status';
import { ApiAction } from '../../../Context/Shared/Domain/Action/ApiAction';
import FaqListRequest from '../../../Context/Support/Faq/Application/List/FaqListRequest';
import FaqListResponse from '../../../Context/Support/Faq/Application/List/FaqListResponse';
import FaqListService from '../../../Context/Support/Faq/Application/List/FaqListService';
import FaqRepository from '../../../Context/Support/Faq/Domain/Persistence/FaqRepository';
import FaqRepositoryMariaDB from '../../../Context/Support/Faq/Infraestructure/Persistence/FaqRepositoryMariaDB';

const repository: FaqRepository = new FaqRepositoryMariaDB();
const service: FaqListService = new FaqListService(repository);

export class FaqListAction implements ApiAction {
    async execute(req: Request, res: Response): Promise<void> {
        try {
            const request: FaqListRequest = new FaqListRequest(
                (req.query.pattern as string) || ''
            );
            const response: FaqListResponse = await service.execute(request);

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
