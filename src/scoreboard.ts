import { Match } from "./match";

export class Scoreboard {
    startMatch(homeTeam: string, awayTeam: string): Match {
        throw new Error("Not implemented");
    }

    finishMatch(match: Match) {
        throw new Error("Not implemented");
    }

    getMatches(): Match[] {
        throw new Error("Not implemented");
    }
}