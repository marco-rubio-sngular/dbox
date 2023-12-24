import { Request, Response, Router } from 'express';
import { ApiAction } from '../../Context/Shared/Domain/Action/ApiAction';
import { TagCreateAction } from '../Project/Tag/Action/TagCreateAction';
import { TagListAction } from '../Project/Tag/Action/TagListAction';

export const register = (router: Router) => {
    router.get('/api/v1/tags', (req: Request, res: Response) => {
        const feature: ApiAction = new TagListAction();
        feature.execute(req, res);
    });
    router.post('/api/v1/tags', (req: Request, res: Response) => {
        const feature: ApiAction = new TagCreateAction();
        feature.execute(req, res);
    });
};
