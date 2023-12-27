import { Request, Response, Router } from 'express';
import { ApiAction } from '../../Context/Shared/Domain/Action/ApiAction';
import { TagCreateAction } from '../Support/Tag/Action/TagCreateAction';
import { TagDeleteAction } from '../Support/Tag/Action/TagDeleteAction';
import { TagListAction } from '../Support/Tag/Action/TagListAction';

export const register = (router: Router) => {
    router.get('/api/v1/tags', (req: Request, res: Response) => {
        const feature: ApiAction = new TagListAction();
        feature.execute(req, res);
    });

    router.delete('/api/v1/tags/:id', (req: Request, res: Response) => {
        const feature: ApiAction = new TagDeleteAction();
        feature.execute(req, res);
    });

    router.post('/api/v1/tags', (req: Request, res: Response) => {
        const feature: ApiAction = new TagCreateAction();
        feature.execute(req, res);
    });
};
