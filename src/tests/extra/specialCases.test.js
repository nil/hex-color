import Hex from '../../index';

const hex = new Hex();

describe('Special cases', () => {
  test('Empty string', () => {
    expect(hex.format('')).toBeFalsy();
  });
  test('Hash', () => {
    expect(hex.format('#')).toBeFalsy();
  });
  test('False', () => {
    expect(hex.format(false)).toBeFalsy();
  });
  test('False as string', () => {
    expect(hex.format('false')).toBe('#FAFAFA');
  });
  test('True', () => {
    expect(hex.format(true)).toBeFalsy();
  });
  test('True as string', () => {
    expect(hex.format('true')).toBe(false);
  });
});
