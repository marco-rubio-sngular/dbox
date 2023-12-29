import { HttpStatusCode } from 'axios';
import { Response } from 'express';
import Base64Danko from '../../Infraestructure/Base64ToolDanko';

class BaseApiAction {
    success(
        res: Response,
        result: unknown,
        code: HttpStatusCode = HttpStatusCode.Ok
    ): void {
        res.status(code).json({
            success: true,
            result: result,
        });
    }
    failed(
        res: Response,
        error: Error,
        code: HttpStatusCode = HttpStatusCode.BadRequest
    ): void {
        res.status(code).json({
            success: false,
            result: (<Error>error).message,
        });
    }

    async decode(encoded: string): Promise<string> {
        return await Base64Danko.fromBase64ToString(encoded);
    }
}

export default BaseApiAction;
