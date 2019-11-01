import reverse from '../src';

test('reverse', () => {
   expect(reverse('hello')).toEqual('olleh');
   expect(reverse('')).toEqual('');
});

const myBeverage = {
   delicious: true,
   sour: false,
};

describe('my beverage', () => {
   test('is delicious', () => {
      expect(myBeverage.delicious).toBeTruthy();
   });

   test('is not sour', () => {
      expect(myBeverage.sour).toBeFalsy();
   });
});