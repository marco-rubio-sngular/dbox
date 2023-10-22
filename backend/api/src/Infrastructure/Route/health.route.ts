import { Request, Response, Router } from 'express';

export const register = (router: Router) => {
    router.get('/health/ping', (req: Request, res: Response) =>
        
        const request:RegisterRequest = new RegisterRequest(
            req.body.email,
            req.body.password
        );
        const service:RegisterService = new RegisterService(request);




        Registro => Comando
        Login => Query SIEMPRE TIENEN RESPUESTA
        UpdateUser => Comando
        List => Query
        Search => Query



            CAMBIO DE ESTADO


            QUERYS QUERYS










        const response:RegisterResponse = service.execute();

        res.json(201);


    );
};
