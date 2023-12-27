import { Request, Response, Router } from 'express';
import { ApiAction } from '../../Context/Shared/Domain/Action/ApiAction';
import { ModuleCreateAction } from '../Iac/Module/ModuleCreateAction';
import { ModuleDeleteAction } from '../Iac/Module/ModuleDeleteAction';
import { ModuleFileCreateAction } from '../Iac/Module/ModuleFileCreateAction';
import { ModuleGetAction } from '../Iac/Module/ModuleGetAction';
import { ModuleListAction } from '../Iac/Module/ModuleListAction';
import { ModuleListFilesAction } from '../Iac/Module/ModuleListFilesAction';

export const register = (router: Router) => {
    router.get('/api/v1/iac/modules', (req: Request, res: Response) => {
        const feature: ApiAction = new ModuleListAction();
        feature.execute(req, res);
    });

    router.get('/api/v1/iac/modules/:id', (req: Request, res: Response) => {
        const feature: ApiAction = new ModuleGetAction();
        feature.execute(req, res);
    });

    router.delete('/api/v1/iac/modules/:id', (req: Request, res: Response) => {
        const feature: ApiAction = new ModuleDeleteAction();
        feature.execute(req, res);
    });

    router.post('/api/v1/iac/modules', (req: Request, res: Response) => {
        const feature: ApiAction = new ModuleCreateAction();
        feature.execute(req, res);
    });

    router.get(
        '/api/v1/iac/modules/:moduleId/files',
        (req: Request, res: Response) => {
            const feature: ApiAction = new ModuleListFilesAction();
            feature.execute(req, res);
        }
    );

    router.post(
        '/api/v1/iac/modules/:moduleId/files',
        (req: Request, res: Response) => {
            const feature: ApiAction = new ModuleFileCreateAction();
            feature.execute(req, res);
        }
    );
};
