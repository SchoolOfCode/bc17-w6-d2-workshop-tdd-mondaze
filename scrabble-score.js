// let A = 1
// let B = 3
// let C = 3
// let D = 2
// let E = 1
// let F = 4
// let G = 2
// let H = 4
// let I = 1
// let J = 8
// let K = 5
// let L = 1
// let M = 3
// let N = 1
// let O = 1
// let P = 3
// let Q = 10
// let R = 1
// let S = 1
// let T = 1
// let U = 1
// let V = 4
// let W = 4
// let X = 8
// let Y = 4
// let Z = 10

export function calculateScrabbleScore(input) {
    const letterScores = {
        a: 1,
        e: 1,
        i: 1,
        o: 1,
        u: 1,
        l: 1,
        n: 1,
        r: 1,
        s: 1,
        t: 1,
        d: 2,
        g: 2,
        b: 3,
        c: 3,
        m: 3,
        p: 3,
        f: 4,
        h: 4,
        v: 4,
        w: 4,
        y: 4,
        k: 5,
        j: 8,
        x: 8,
        q: 10,
        z: 10,
      };
      
      
      
      //changes everything to lowercase 
      .toLowerCase()
      //splits the word into letters
      .split('')
      //combines a basket and the running total of whatever letter we're iterating over, starting at 0
      .reduce((combined, letter) => combined + (letterScores[letter]) , 0);
      if(!letterScores[letter]) {
        throw new error('Invalid input')
      }
      return input
    }

    
