import getFunction from '../functions1';
const without = getFunction();
test("without", () => {
  expect(without([2, 1, 2, 3], 1, 2)).toEqual([3])
})
