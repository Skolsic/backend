import axios, { AxiosResponse } from 'axios';
import { TournamentResponse } from '../models/configResponse.model';
import config from 'config';
import { Tournament } from '../models/tournament.model';

export async function getAllTournaments() {
    const tournamentUrl = config.get<string>('tournamentUrl');

    try {
        const response = await axios({
			url: `${tournamentUrl}`,
			method: "get",
		}) as AxiosResponse<TournamentResponse>;

        const parsedTournaments = getParsedTournaments(response.data.doc[0].data.tournaments.slice(0, 5));

        return parsedTournaments;
    } catch (error: any) {
        throw new Error(error);
    }
}

function getParsedTournaments(tournaments: Tournament[]): Tournament[] {
    let parsedTournaments = tournaments.map(tournament => {
        const {_tid, _rcid, name, year, seasontypename} = tournament;

        return setParsedTournament(_tid, _rcid, name, year, seasontypename);
    })


    return parsedTournaments;
}

function setParsedTournament(
    _tid: number, 
    _rcid: number, 
    name: string, 
    year: string, 
    seasontypename: string
    ): Tournament {
    return {
        _tid: _tid,
        _rcid: _rcid,
        name: name,
        year: year,
        seasontypename: seasontypename
    } as Tournament;
}



