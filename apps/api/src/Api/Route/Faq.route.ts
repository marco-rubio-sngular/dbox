import { Request, Response, Router } from 'express';
import { ApiAction } from '../../Context/Shared/Domain/Action/ApiAction';
import { FaqCreateAction } from '../Support/Faq/FaqCreateAction';
import { FaqDeleteAction } from '../Support/Faq/FaqDeleteAction';
import { FaqListAction } from '../Support/Faq/FaqListAction';

export const register = (router: Router) => {
    router.get('/api/v1/faqs', (req: Request, res: Response) => {
        const feature: ApiAction = new FaqListAction();
        feature.execute(req, res);
    });

    router.delete('/api/v1/faqs/:id', (req: Request, res: Response) => {
        const feature: ApiAction = new FaqDeleteAction();
        feature.execute(req, res);
    });

    router.post('/api/v1/faqs', (req: Request, res: Response) => {
        const feature: ApiAction = new FaqCreateAction();
        feature.execute(req, res);
    });
};
