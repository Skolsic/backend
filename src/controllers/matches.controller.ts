import { Request, Response, NextFunction } from "express";
import logger from "./../utils/logger";
import { getAllMatches } from '../services/match.service';
import { Match } from '../models/match.model';
import { RealMatchId } from "../schema/match.schema";

export async function getMatches(
    req: Request<RealMatchId["params"]>, res: Response, next: NextFunction
    ) {
    try {
         const response: Match[] = await getAllMatches(req.params.tid);
         res.status(200).json(response);
         next();
        
    } catch (error: any) {
        logger.error(error)
        return res.status(404).send(error.message);
    }
}
