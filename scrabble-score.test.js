import { calculateScrabbleScore, input, letterScores, scrabbleScores} from "./scrabble-score.js";
import { expect, test } from 'vitest';

test('calculate scrabble score for A', () => {
    expect(calculateScrabbleScore('a')).toBe(1);
 })

 test('calculate scrabble score for longer words (a)', () => {
    expect(calculateScrabbleScore('celestial')).toBe(11);
    expect(calculateScrabbleScore('azumarill')).toBe(20);
    expect(calculateScrabbleScore('ambivalent')).toBe(17);
    expect(calculateScrabbleScore('clefairy')).toBe(16);
    expect(calculateScrabbleScore('unbeknownst')).toBe(20);
 })

