export class Match {
    protected _homeTeam: string;
    protected _awayTeam: string;
    protected _homeScore: number;
    protected _awayScore: number;

    constructor(homeTeam: string, awayTeam: string) {
        this._homeTeam = homeTeam;
        this._awayTeam = awayTeam;
        this._homeScore = 0;
        this._awayScore = 0;
    }

    updateScore(homeScore: number, awayScore: number) {
        throw new Error("Not implemented");
    }

    finishMatch() {
        throw new Error("Not implemented");
    }

    get homeScore(): number {
        return this._homeScore;
    }

    get awayScore(): number {
        return this._awayScore;
    }

    get homeTeam(): string {
        return this._homeTeam;
    }

    get awayTeam(): string {
        return this._awayTeam;
    }

    get finished(): boolean {
        throw new Error("Not implemented");
    }
}