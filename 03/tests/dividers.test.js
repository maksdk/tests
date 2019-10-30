//@ts-check
import assert from "assert";

const getDividers = (num) => {
   const dividers = [];
   for (let i = 1; i <= num; i += 1) {
      if (num % i === 0) {
         dividers.push(i);
      }
   }
   return dividers;
};

const actual = getDividers(9);
const expected = [1, 3, 9];

assert.deepEqual(actual, expected);
assert.notDeepEqual(actual, []);