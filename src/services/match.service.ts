import { MatchResponse } from './../models/configResponse.model';
import axios, { AxiosResponse } from 'axios';
import config from 'config';
import { Date } from '../models/date.model';
import { Match } from '../models/match.model';
import { Team } from '../models/team.model';
import { Score } from '../models/score.model';

export async function getAllMatches(tid: string) {
    const tournamentUrl = config.get<string>('matchesUrl');

    try {
        const response = await axios({
			url: `${tournamentUrl}/${tid}/2021`,
			method: "get",
		}) as AxiosResponse<MatchResponse>;

        const parsedMatches = getParsedMatches(
            Object.entries(response.data.doc[0].data.matches).slice(0, 5).map(match => match[1])
        );

        return parsedMatches;
    } catch (error: any) {
        throw new Error(error);
    }
}

function getParsedMatches(matches: Match[]): Match[] {
    let parsedMatches = matches.map(match => {
        const {
            _tid,
            time: {time, date: dateOfMatch}, 
            teams: {home: homeTeam, away: awayTeam},
            result: {home: homeGoal, away: awayGoal},
            comment
        } = match;

        const {name: homeTeamName} = homeTeam;
        const {name: awayTeamName} = awayTeam;
        const date = { time: time, date: dateOfMatch } as Date;

        return setParsedMatch(_tid, date, homeTeamName, awayTeamName, homeGoal, awayGoal, comment);
    })


    return parsedMatches;
}

function setParsedMatch(
    _tid: number, 
    date: Date, 
    homeTeamName: Team, 
    awayTeamName: Team, 
    homeGoal: Score, 
    awayGoal: Score,
    comment: string
    ): Match {
    return {
        _tid: _tid,
        time: date,
        teams: {
            home: { name: homeTeamName},
            away: { name: awayTeamName}
        },
        result: {
            home: homeGoal,
            away: awayGoal
        },
        comment: comment
    } as Match;
}