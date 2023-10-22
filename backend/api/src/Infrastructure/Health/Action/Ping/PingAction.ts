import { Request, Response } from "express";
import HttpStatus from "http-status";
import { ApiAction } from "../../../../Modules/Shared/Domain/Contrat/ApiAction";

export class PingAction implements ApiAction {
  async execute(_req: Request, res: Response): Promise<void> {
    res
      .status(HttpStatus.OK)
      .send("[Health.Action.Ping] ~ pong at " + new Date());
  }
}
