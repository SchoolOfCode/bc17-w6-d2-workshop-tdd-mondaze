import { calculateScrabbleScore, input, letterScores, scrabbleScores} from "./scrabble-score.js";
import { expect, test } from 'vitest';

test('calculate scrabble score for A', () => {
    expect(calculateScrabbleScore('a')).toBe(1);
 })
