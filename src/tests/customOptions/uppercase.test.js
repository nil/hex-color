import { customOptions } from '../utils';

const uppercase = {
  uppercase: true
};

const lowercase = {
  uppercase: false
};

describe('Custom options', () => {
  describe('Lowercase', () => {
    describe('Only letters', () => {
      customOptions('1 letter', 'a', '#aaaaaa', lowercase);
      customOptions('2 letters', 'bc', '#bcbcbc', lowercase);
      customOptions('3 letters', 'def', '#ddeeff', lowercase);
    });
    describe('Letters and numbers', () => {
      customOptions('1 letter, 1 number, ', 'a1', '#a1a1a1', lowercase);
      customOptions('2 letters, 2 numbers, ', 'b2c3', '#bb22cc', lowercase);
      customOptions('3 letters, 3 numbers, ', 'd4e5f6', '#d4e5f6', lowercase);
    });
  });
  describe('Uppercase', () => {
    describe('Only letters', () => {
      customOptions('1 letter', 'A', '#AAAAAA', uppercase);
      customOptions('2 letters', 'BC', '#BCBCBC', uppercase);
      customOptions('3 letters', 'DEF', '#DDEEFF', uppercase);
    });
    describe('Letters and numbers', () => {
      customOptions('1 letter, 1 number, ', 'A1', '#A1A1A1', uppercase);
      customOptions('2 letters, 2 numbers, ', 'B2C3', '#BB22CC', uppercase);
      customOptions('3 letters, 3 numbers, ', 'D4E5F6', '#D4E5F6', uppercase);
    });
  });
});
