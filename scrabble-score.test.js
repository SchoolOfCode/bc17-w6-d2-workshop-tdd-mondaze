import { calculateScrabbleScore, input, letterScores, scrabbleScores} from "./scrabble-score.js";
import { expect, test } from 'vitest';

// test('calculate scrabble score for A', () => {
//     expect(calculateScrabbleScore('a')).toBe(1);
//  })

//  test('calculate scrabble score for longer words (a)', () => {
//     expect(calculateScrabbleScore('celestial')).toBe(11);
//     expect(calculateScrabbleScore('azumarill')).toBe(20);
//     expect(calculateScrabbleScore('ambivalent')).toBe(17);
//     expect(calculateScrabbleScore('clefairy')).toBe(16);
//     expect(calculateScrabbleScore('unbeknownst')).toBe(20);
//  })


// Define test cases
const testCases = [
   ['a', 1],
   ['b', 3],
   ['celestial', 11],
   ['azumarill', 20],
   ['ambivalent', 17],
   ['clefairy', 16],
   ['unbeknownst', 20],
 ];
 
 //iterating over the array to test each word
 test.each(testCases)(
   //name of task
   'calculate scrabble score for %s',
   //placeholder values
   (word, expectedScore) => {
      //expected outcome
     expect(calculateScrabbleScore(word)).toBe(expectedScore);
   }
 );

 test('test for multiple letters', () => {
   expect(calculateScrabbleScore('fabulous')).toBe(13);
   expect(calculateScrabbleScore('nevertheless')).toBe(18);
   expect(calculateScrabbleScore('flavour')).toBe(13);
    })

    test('error test', () => {
      expect(() => calculateScrabbleScore('')).toThrow('Invalid input')
    })