const hex = require('../index.js');

describe('Special cases', () => {
  test('Empty string', () => {
    expect(hex('')).toBeFalsy();
  });
  test('Hash', () => {
    expect(hex('#')).toBeFalsy();
  });
  test('False', () => {
    expect(hex(false)).toBeFalsy();
  });
  test('False as string', () => {
    expect(hex('false')).toBe('#FAFAFA');
  });
  test('True', () => {
    expect(hex(true)).toBeFalsy();
  });
  test('True as string', () => {
    expect(hex('true')).toBe(false);
  });
});
