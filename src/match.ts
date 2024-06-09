export class Match {
    protected _homeTeam: string;
    protected _awayTeam: string;
    protected _homeScore: number;
    protected _awayScore: number;
    protected _finished: boolean;

    constructor(homeTeam: string, awayTeam: string) {
        this._homeTeam = homeTeam;
        this._awayTeam = awayTeam;
        this._homeScore = 0;
        this._awayScore = 0;
        this._finished = false;
    }

    updateScore(homeScore: number, awayScore: number) {
        if (homeScore < 0 || awayScore < 0) {
            throw new Error("Invalid negative score");
        }

        this._homeScore = homeScore;
        this._awayScore = awayScore;
    }

    finishMatch() {
        this._finished = true;
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
        return this._finished;
    }
}