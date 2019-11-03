//@ts-check
import getImpelementation from '../implementations';

const makeValidator = getImpelementation();

test("validation", () => {
   const validator = makeValidator();
   expect(validator.isValid("some value")).toBe(true);

   validator.addCheck(v => v > 5);
   expect(validator.isValid(5)).toBe(false);
   expect(validator.isValid(3)).toBe(false);
   expect(validator.isValid(8)).toBe(true);

   validator.addCheck(v => Number.isInteger(v));
   expect(validator.isValid(8)).toBe(true);
   expect(validator.isValid(6)).toBe(true);
   expect(validator.isValid("5")).toBe(false);
});