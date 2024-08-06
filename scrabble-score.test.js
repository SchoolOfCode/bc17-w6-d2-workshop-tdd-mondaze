import { calculateScrabbleScore } from "./scrabble-score";

test('calculate scrabble score for A', () => {
    expect(calculateScrabbleScore(A)).toBe(1);
 })