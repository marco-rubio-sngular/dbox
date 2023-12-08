import { Router } from 'express';
import glob from 'glob';

export default class RouteRegistrator {
    register(router: Router): void {
        const routes = glob.sync(__dirname + '/**/*.route.*');
        routes.map((route) => this.registerFile(route, router));
    }

    public registerFile(routePath: string, router: Router) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require(routePath).register(router);
    }
}
