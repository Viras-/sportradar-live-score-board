export class Match {
    constructor(homeTeam: string, awayTeam: string) {
        throw new Error("Not implemented");
    }

    updateScore(homeScore: number, awayScore: number) {
        throw new Error("Not implemented");
    }

    finishMatch() {
        throw new Error("Not implemented");
    }

    get homeScore(): number {
        throw new Error("Not implemented");
    }

    get awayScore(): number {
        throw new Error("Not implemented");
    }

    get homeTeam(): number {
        throw new Error("Not implemented");
    }

    get awayTeam(): number {
        throw new Error("Not implemented");
    }

    get finished(): boolean {
        throw new Error("Not implemented");
    }
}