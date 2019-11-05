import getImpelementation from '../implementations';

const Card = getImpelementation();

const list = [{
    good: {
      name: "car1",
      price: 10
    },
    count: 1
  },
  {
    good: {
      name: "car2",
      price: 20
    },
    count: 2
  },
  {
    good: {
      name: "car3",
      price: 30
    },
    count: 3
  }
];

test("Card1", () => {
  const card = new Card();

  expect(card.getItems().length).toEqual(0);

  card.addItem(list[0].good, list[0].count);

  expect(card.getItems()).toEqual([list[0]]);
  expect(card.getItems().length).toEqual(1);
  expect(card.getCost()).toEqual(10);

  card.addItem(list[1].good, list[1].count);
  card.addItem(list[2].good, list[2].count);

  expect(card.getItems()).toEqual(list);
  expect(card.getItems().length).toEqual(3);
  expect(card.getCost()).toEqual(140);
});


test('Cart2', () => {
  const cart = new Cart();
  expect(cart.getItems()).toHaveLength(0);

  cart.addItem({
    name: 'car',
    price: 3
  }, 5);
  expect(cart.getItems()).toHaveLength(1);
  expect(cart.getCost()).toBe(15);
  expect(cart.getCount()).toBe(5);

  cart.addItem({
    name: 'house',
    price: 10
  }, 2);
  expect(cart.getItems()).toHaveLength(2);
  expect(cart.getCost()).toBe(35);
  expect(cart.getCount()).toBe(7);
});