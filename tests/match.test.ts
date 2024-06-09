import { Match } from "../src/match";

describe('Test Matches', () => {
    let testMatch: Match;

    test("Create new match", () => {
        testMatch = new Match("Germany", "Scotland");
        expect(testMatch).toBeDefined();
        expect(testMatch.homeTeam).toEqual("Germany");
        expect(testMatch.awayTeam).toEqual("Scotland");
        expect(testMatch.homeScore).toEqual(0);
        expect(testMatch.awayScore).toEqual(0);
        expect(testMatch.finished).toEqual(false);
        expect(testMatch.startTime).toBeGreaterThan(0);
    });

    test("Set score", () => {
        testMatch.updateScore(1, 2);
        expect(testMatch.homeScore).toEqual(1);
        expect(testMatch.awayScore).toEqual(2);
    });

    test("Total score", () => {
        testMatch.updateScore(4, 3);
        expect(testMatch.totalScore).toEqual(7);
    });

    test("Set invalid score to fail", () => {
        expect(() => testMatch.updateScore(-1, 2)).toThrow(Error);
        expect(() => testMatch.updateScore(5, -1)).toThrow(Error);
        expect(() => testMatch.updateScore(-1, -1)).toThrow(Error);
    });

    test("Finish match", () => {
        expect(testMatch.finished).toBe(false);
        testMatch.finishMatch();
        expect(testMatch.finished).toBe(true);
    });

    test("Updated score after match finished", () => {
        expect(() => testMatch.updateScore(2, 2)).toThrow(Error);
    });

    test("Finish match again", () => {
        expect(() => testMatch.finishMatch()).toThrow(Error);
    });
});