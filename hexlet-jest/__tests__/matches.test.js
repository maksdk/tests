import getFunction from '../functions';

const gt = getFunction();

test("matches", () => {
  expect(gt(3, 1)).toBe(true);
  expect(gt(3, 3)).toBe(false);
  expect(gt(1, 3)).toBe(false);
});