import { getMatchSchema } from './schema/match.schema';
import { Express } from "express";
import { getTournaments } from './controllers/tournament.controller';
import validateResource from "./middleware/validateResource";
import { getMatches } from './controllers/matches.controller';

function routes(app: Express) {
    app.get('/api/tournaments', getTournaments)
    app.get('/api/matches/:tid', validateResource(getMatchSchema), getMatches)
}

export default routes;