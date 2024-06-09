import { Match } from "./match";

/**
 * Represents the active scoreboard, holding all active matches and returning the scoreboard in the desired order
 */
export class Scoreboard {
    protected _activeMatches: Match[];

    constructor() {
        this._activeMatches = [];
    }

    /**
     * Start a new match, adding it to the scoreboard
     * @param homeTeam 
     * @param awayTeam 
     * @returns 
     */
    startMatch(homeTeam: string, awayTeam: string): Match {
        const newMatch = new Match(homeTeam, awayTeam);
        this._activeMatches.push(newMatch);

        return newMatch;
    }

    /**
     * Finish a match, removing it from the scoreboard
     * @param match 
     */
    finishMatch(match: Match) {
        throw new Error("Not implemented");
    }

    /**
     * Returns the scoreboard in the desired order, holding all active games
     */
    getMatches(): Match[] {
        throw new Error("Not implemented");
    }
}