import { json, urlencoded } from 'body-parser';
import compress from 'compression';
import cors from 'cors';
import errorHandler from 'errorhandler';
import express from 'express';
import Router from 'express-promise-router';
import helmet from 'helmet';
import * as http from 'http';
import RouteRegistrator from './Route/RouteRegistrator';

export class Server {
    private express: express.Express;
    private port: string;
    private httpServer?: http.Server;

    constructor(port: string) {
        this.port = port;
        this.express = express();
        this.express.use(json());
        this.express.use(cors());
        this.express.use(urlencoded({ extended: true }));
        this.express.use(helmet.xssFilter());
        this.express.use(helmet.noSniff());
        this.express.use(helmet.hidePoweredBy());
        this.express.use(helmet.frameguard({ action: 'deny' }));
        this.express.use(compress());
        const router = Router();
        this.express.use(router);
        this.express.use(errorHandler());
        this.express.on('error', function (e) {
            console.error('');
            console.error('----- startof.ERROR ON EXPRESS SERVER -----');
            console.error(e);
            console.error('----- endof.ERROR ON EXPRESS SERVER -----');
            console.error('');
        });

        new RouteRegistrator().register(router);

        // router.use(
        //     (
        //         err: Error,
        //         _req: Request,
        //         res: Response,
        //         // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/ban-types
        //         _next: Function
        //     ): void => {
        //         res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
        //     }
        // );
    }

    async listen(): Promise<void> {
        return new Promise((resolve) => {
            this.httpServer = this.express.listen(this.port, () => {
                console.log(
                    `  '{.".} > api server started at http://localhost:${
                        this.port
                    } in ${this.express.get('env')} mode`
                );
                console.log('  Press CTRL-C to stop\n');
                resolve();
            });
        });
    }

    getHTTPServer() {
        return this.httpServer;
    }

    async stop(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.httpServer) {
                this.httpServer.close((error) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve();
                });
            }

            return resolve();
        });
    }
}
