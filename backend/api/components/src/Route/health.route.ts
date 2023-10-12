import { Router, Request, Response } from 'express';
import { ApiAction } from '../Shared/Domain/Contrat/ApiAction';
import { PingAction } from '../Health/Action/Ping/PingAction';

export const register = (router: Router) => {
    const feature: ApiAction = new PingAction();
    router.get('/health/ping', (req: Request, res: Response) => feature.execute(req, res));
};
