import { calculateScrabbleScore, input, letterScores, scrabbleScores} from "./scrabble-score.js";
import { expect, test } from 'vitest';


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
 
 // Ticket 2- Iterating over the array to test each word
 test.each(testCases)(
   //name of task
   'calculate scrabble score for %s',
   //placeholder values
   (word, expectedScore) => {
      //expected outcome
     expect(calculateScrabbleScore(word)).toBe(expectedScore);
   }
 );

 // Ticket 3 - Multiple letters test
 test('test for multiple letters', () => {
   expect(calculateScrabbleScore('fabulous')).toBe(13);
   expect(calculateScrabbleScore('nevertheless')).toBe(18);
   expect(calculateScrabbleScore('flavour')).toBe(13);
    })

// Ticket 4
function notaLetter() {
  if (input !== 1 || !/[A-Za-z]/) {
    throw new Error('Not a correct input');
  }
}

test('not a letter error', () => {
  // Test that the error message says "Not a letter"
  expect(() => notaLetter('*')).toThrowError('Not a correct input')
  expect(() => notaLetter('1')).toThrowError('Not a correct input')
})