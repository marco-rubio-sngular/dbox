import { Request, Response } from 'express';
import HttpStatus from 'http-status';
import { v4 as uuidv4 } from 'uuid';
import { ApiAction } from '../../../Context/Shared/Domain/Action/ApiAction';
import FaqCreateRequest from '../../../Context/Support/Faq/Application/Create/FaqCreateRequest';
import FaqCreateService from '../../../Context/Support/Faq/Application/Create/FaqCreateService';
import FaqRepository from '../../../Context/Support/Faq/Domain/Persistence/FaqRepository';
import FaqRepositoryMariaDB from '../../../Context/Support/Faq/Infraestructure/Persistence/FaqRepositoryMariaDB';

const repository: FaqRepository = new FaqRepositoryMariaDB();
const service: FaqCreateService = new FaqCreateService(repository);

export class FaqCreateAction implements ApiAction {
    async execute(req: Request, res: Response): Promise<void> {
        console.log(req.body);

        try {
            const request: FaqCreateRequest = new FaqCreateRequest(
                uuidv4(),
                req.body.title,
                req.body.solution
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
