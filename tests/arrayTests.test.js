const shoppingList = [
  'diapers',
  'kleenex',
  'trashBags',
  'paper towels',
  'beer',
];

test('shopping list should have beer', () =>{
  expect(shoppingList).toContain('beer');
});