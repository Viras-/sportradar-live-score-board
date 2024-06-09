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
        if (!this._activeMatches.includes(match)) {
            throw new Error("Match not on scoreboard");
        }

        this._activeMatches = this._activeMatches.filter((activeMatch) => activeMatch !== match);
        match.finishMatch();
    }

    /**
     * Returns the scoreboard in the desired order, holding all active games
     */
    getMatches(): Match[] {
        return this._activeMatches.sort((m1, m2) => m2.totalScore - m1.totalScore);
    }
}