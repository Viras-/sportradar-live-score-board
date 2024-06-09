/**
 * Represents a match (which is either ongoing or finished)
 * It holds all relevant infos and provides access to them
 */
export class Match {
    protected _homeTeam: string;
    protected _awayTeam: string;
    protected _homeScore: number;
    protected _awayScore: number;
    protected _finished: boolean;
    protected _startTime: number;

    constructor(homeTeam: string, awayTeam: string) {
        this._homeTeam = homeTeam;
        this._awayTeam = awayTeam;
        this._homeScore = 0;
        this._awayScore = 0;
        this._finished = false;
        this._startTime = Date.now();
    }

    /**
     * Set the new score for the home / away team
     * @param homeScore 
     * @param awayScore 
     */
    updateScore(homeScore: number, awayScore: number) {
        if (homeScore < 0 || awayScore < 0) {
            throw new Error("Invalid negative score");
        }
        if (this._finished) {
            throw new Error("Can't update score after match finished");
        }

        this._homeScore = homeScore;
        this._awayScore = awayScore;
    }

    /**
     * Finishes the match, disabling any further modification of scores etc.
     */
    finishMatch() {
        if (this._finished) {
            throw new Error("Match already finished");
        }

        this._finished = true;
    }

    get homeScore(): number {
        return this._homeScore;
    }

    get awayScore(): number {
        return this._awayScore;
    }

    get totalScore(): number {
        return this._homeScore + this._awayScore;
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

    get startTime(): number {
        return this._startTime;
    }
}