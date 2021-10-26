import { Date } from "./date.model";
import { Score } from "./score.model";
import { Team } from "./team.model";

export type Match = {
    _tid: number,
    time: Date,
    teams: {
        "home": {
            name: Team
        },
        "away": {
            name: Team
        }
    }
    result: {
        "home" : Score,
        "away": Score
    },
    comment: string
}