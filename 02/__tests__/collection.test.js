import getFunction from '../functions';

const get = getFunction();

// BEGIN (write your solution here)
if (get({ key: `value` }, `key`) !== `value`) throw new Error(`Error`);
if (get({}, `key`, `defaultValue`) !== `defaultValue`) throw new Error(`Error`);
if (get({ key: `value` }, `key`, `defaultValue`) !== `value`) throw new Error(`Error`);

console.log("All tests worked right");
// END
