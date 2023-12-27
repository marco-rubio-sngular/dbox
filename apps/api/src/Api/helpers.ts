import { Request } from 'express';
import { URL } from 'url';

export const getModuleFileUrl = (
    req: Request,
    moduleId: string,
    moduleFileId: string
): string => {
    let path = (req.route.path as string)
        .replace(':moduleId', moduleId)
        .replace(':moduleFileId', moduleFileId);
    if (path.includes(moduleFileId) === false) {
        path += `/${moduleFileId}`;
    }

    return new URL(`${req.protocol}://${req.get('host')}`).toString();
};
