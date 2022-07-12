const reverseString = require('../functions/reverse');

test('Expect that this test reverses string', () => {
  expect(reverseString('BRAZIL')).toBe('LIZARB');
});

test('reversed "test" to "tset"', () => {
  expect(reverseString('test')).toBe('tset');
});