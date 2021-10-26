import { Request, Response, NextFunction } from "express";
import logger from "./../utils/logger";
import { getAllTournaments } from './../services/tournament.service'
import { Tournament } from '../models/tournament.model';

export async function getTournaments(
    req: Request, res: Response, next: NextFunction
    ) {
    try {
         const response: Tournament[] = await getAllTournaments();
         res.status(200).json(response);
         next();
        
    } catch (error: any) {
        logger.error(error)
        return res.status(404).send(error.message);
    }
}