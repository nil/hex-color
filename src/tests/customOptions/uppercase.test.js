import { formatCustom } from '../utils';

const uppercase = {
  uppercase: true
};

const lowercase = {
  uppercase: false
};

describe('Custom options', () => {
  describe('Lowercase', () => {
    describe('Only letters', () => {
      formatCustom('1 letter', 'a', '#aaaaaa', lowercase);
      formatCustom('2 letters', 'bc', '#bcbcbc', lowercase);
      formatCustom('3 letters', 'def', '#ddeeff', lowercase);
    });
    describe('Letters and numbers', () => {
      formatCustom('1 letter, 1 number, ', 'a1', '#a1a1a1', lowercase);
      formatCustom('2 letters, 2 numbers, ', 'b2c3', '#bb22cc', lowercase);
      formatCustom('3 letters, 3 numbers, ', 'd4e5f6', '#d4e5f6', lowercase);
    });
  });
  describe('Uppercase', () => {
    describe('Only letters', () => {
      formatCustom('1 letter', 'A', '#AAAAAA', uppercase);
      formatCustom('2 letters', 'BC', '#BCBCBC', uppercase);
      formatCustom('3 letters', 'DEF', '#DDEEFF', uppercase);
    });
    describe('Letters and numbers', () => {
      formatCustom('1 letter, 1 number, ', 'A1', '#A1A1A1', uppercase);
      formatCustom('2 letters, 2 numbers, ', 'B2C3', '#BB22CC', uppercase);
      formatCustom('3 letters, 3 numbers, ', 'D4E5F6', '#D4E5F6', uppercase);
    });
  });
});
