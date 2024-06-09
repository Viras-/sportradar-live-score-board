import { Match } from "./match";

export class Scoreboard {
    protected _activeMatches: Match[];

    constructor() {
        this._activeMatches = [];
    }

    startMatch(homeTeam: string, awayTeam: string): Match {
        const newMatch = new Match(homeTeam, awayTeam);
        this._activeMatches.push(newMatch);

        return newMatch;
    }

    finishMatch(match: Match) {
        throw new Error("Not implemented");
    }

    getMatches(): Match[] {
        throw new Error("Not implemented");
    }
}