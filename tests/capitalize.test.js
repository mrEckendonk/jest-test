const capitalize = require('../functions/capitalize');

test('Expect that the string Start with a Capital letter', () => {
  expect(capitalize('Nederland')).toBe('Nederland');
});