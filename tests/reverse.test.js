const reverseString = require('../functions/reverse');

test('Expect that this test reverses string', () => {
  const str = 'BRAZIL' // Arrange
  const ans = reverseString(str) // Act
  expect(ans).toBe('LIZARB'); // Assert
});

test('reversed "test" to "tset"', () => {
  const str = 'test'; // Arrange
  const ans = reverseString(str) // Act
  expect(ans).toBe('tset'); // Assert
});