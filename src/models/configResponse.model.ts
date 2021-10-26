import { Match } from "./match.model"
import { Tournament } from "./tournament.model"

export type TournamentResponse = {
    doc: [{
        data: {
            tournaments: Array<Tournament>
        }
    }]
}

export type MatchResponse = {
    doc: [{
        data: {
            matches: Array<Match>
        }
    }]
}