import { Request, Response } from "express";

export interface ApiAction {
    execute(_req: Request, res: Response): Promise<void>;
}