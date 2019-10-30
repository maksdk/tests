import assert from 'assert';
import getFunction from '../functions';
import _ from "lodash";

const take = getFunction();

const actual1 = take([1,2,3]);
const expected1 = _.take([1,2,3]);
assert.deepEqual(actual1, expected1);
assert.notDeepEqual(actual1, []);

const actual2 = take([4, 3], 9);
const expected2 = _.take([4, 3], 9);
assert.deepEqual(actual2, expected2);
assert.notDeepEqual(actual2, []);

assert.deepEqual(take(['one', 'two', 8], 9), ['one', 'two', 8]);
assert.deepEqual(take([1, 2]), [1]);
assert.deepEqual(take(['one', 'two', 'three'], 2), ['one', 'two']);
assert.deepEqual(take([]), []);