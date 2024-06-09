import { Match } from "../src/match";
import { Scoreboard } from "../src/scoreboard";

/**
 * Starting point for test case definition, follows the simple task requirements as outlined in the document
 */
describe('Requirements tests', () => {
    const scoreboard = new Scoreboard();
    let testMatch: Match;

    test('1. Start new match', () => {
        testMatch = scoreboard.startMatch("Austria", "Serbia");
        expect(testMatch).toBeDefined();
    });
    test('2. Update score', () => {
        testMatch.updateScore(2, 1);
        expect(testMatch.homeScore).toBe(2);
        expect(testMatch.awayScore).toBe(1);
    });
    test('3. Finish match', () => {
        expect(testMatch.finished).toBe(false);
        scoreboard.finishMatch(testMatch);
        expect(testMatch.finished).toBe(true);
    });
    test('4. Get summary of matches', () => {
        expect(scoreboard.getMatches()).toHaveLength(0);
    });
});

/**
 * Tests the code based on the example provided in the task requirements
 */
describe('Example tests', () => {
    const scoreboard = new Scoreboard();
    let mcMatch: Match;
    let sbMatch: Match;
    let gfMatch: Match;
    let uiMatch: Match;
    let aaMatch: Match;

    test('a. Mexico - Canada', () => {
        mcMatch = scoreboard.startMatch("Mexico", "Canada");
        expect(mcMatch).toBeDefined();
        mcMatch.updateScore(0, 5);
    });
    test('b. Spain - Brazil', () => {
        sbMatch = scoreboard.startMatch("Spain", "Brazil");
        expect(sbMatch).toBeDefined();
        sbMatch.updateScore(10, 2);
    });
    test('c. Germany - France', () => {
        gfMatch = scoreboard.startMatch("Germany", "France");
        expect(gfMatch).toBeDefined();
        gfMatch.updateScore(2, 2);
    });
    test('d. Uruguay - Italy', () => {
        uiMatch = scoreboard.startMatch("Uruguay", "Italy");
        expect(uiMatch).toBeDefined();
        uiMatch.updateScore(6, 6);
    });
    test('e. Argentina - Australia', () => {
        aaMatch = scoreboard.startMatch("Argentina", "Australia");
        expect(aaMatch).toBeDefined();
        aaMatch.updateScore(3, 1);
    });
    test('Scoreboard check', () => {
        const matches = scoreboard.getMatches();
        expect(matches).toHaveLength(5);
        expect(matches[0]).toBe(uiMatch);
        expect(matches[1]).toBe(sbMatch);
        expect(matches[2]).toBe(mcMatch);
        expect(matches[3]).toBe(aaMatch);
        expect(matches[4]).toBe(gfMatch);
    });
});

describe("Test Scoreboard", () => {
    const scoreboard = new Scoreboard();
    let testMatch: Match;

    test('Add match', () => {
        expect(scoreboard.getMatches()).toHaveLength(0);
        testMatch = scoreboard.startMatch("Italy", "Poland");
        expect(scoreboard.getMatches()).toHaveLength(1);
        expect(scoreboard.getMatches()[0]).toBe(testMatch);
    });

    test('Finish match', () => {
        expect(scoreboard.getMatches()).toHaveLength(1);
        scoreboard.finishMatch(testMatch);
        expect(scoreboard.getMatches()).toHaveLength(0);
    });

    test('Finish match which is not on scoreboard', () => {
        const testMatch = new Match("Croatia", "Ireland");
        expect(() => scoreboard.finishMatch(testMatch)).toThrow(Error);
    });

    test('Finish match twice', () => {
        testMatch = scoreboard.startMatch("Italy", "Poland");
        scoreboard.finishMatch(testMatch);
        expect(() => scoreboard.finishMatch(testMatch)).toThrow(Error);
    });

    test('Finish match also updates match object', () => {
        testMatch = scoreboard.startMatch("Italy", "Poland");
        expect(testMatch.finished).toBe(false);
        scoreboard.finishMatch(testMatch);
        expect(testMatch.finished).toBe(true);
    });
});