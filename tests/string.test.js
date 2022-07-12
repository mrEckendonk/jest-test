const stringLength = require('../functions/strings');

test('string length is 10', () => {
  expect(stringLength('abcdefghij')).toBe(10);
});

test('string length is 3', () => {
  expect(stringLength('abc')).toBe(3);
});

test('string leght is 6', () => {
  expect(stringLength('123456')).toBe(6);
});

test('Expect that this test shows an error', () => {
  expect(stringLength('mrEckendonk')).toBe(11);
});