import { formatDefault } from '../utils';

describe('Default options', () => {
  describe('Inalid characters', () => {
    describe('All invalid characters', () => {
      formatDefault('1 character', 'r', false);
      formatDefault('2 characters', 'st', false);
      formatDefault('Accents', 'àvçđë', false);
      formatDefault('Symbols', '$%&:;', false);
    });

    describe('1 invalid character', () => {
      describe('1 valid character', () => {
        formatDefault('1st position', 'r0', '#000000');
        formatDefault('2nd position', '1r', '#111111');
      });
      describe('2 valid characters', () => {
        formatDefault('1st position', 'r23', '#232323');
        formatDefault('2nd position', '4r5', '#454545');
        formatDefault('3rd position', '67r', '#676767');
      });
      describe('3 valid characters', () => {
        formatDefault('1st position', 'r89A', '#8899AA');
        formatDefault('2nd position', 'BrCD', '#BBCCDD');
        formatDefault('3rd position', 'EFr0', '#EEFF00');
        formatDefault('4th position', '123r', '#112233');
      });
      describe('4 valid characters', () => {
        formatDefault('1st position', 'r4567', '#445566');
        formatDefault('2nd position', '8r9AB', '#8899AA');
        formatDefault('3rd position', 'CDrEF', '#CCDDEE');
        formatDefault('4th position', '012r3', '#001122');
        formatDefault('5th position', '4567r', '#445566');
      });
    });

    describe('2 invalid characters', () => {
      describe('1 valid character', () => {
        formatDefault('1st position', 'rr0', false);
        formatDefault('2nd position', 'r1r', '#111111');
        formatDefault('3rd position', '2rr', '#222222');
      });
      describe('2 valid characters', () => {
        formatDefault('1st position', 'rr34', false);
        formatDefault('2nd position', 'r5r6', '#565656');
        formatDefault('3rd position', '7rr8', '#777777');
        formatDefault('4th position', '9rAr', '#9A9A9A');
        formatDefault('5th position', 'BCrr', '#BCBCBC');
      });
      describe('3 valid characters', () => {
        formatDefault('1st position', 'rrDEF', false);
        formatDefault('2nd position', 'r0r12', '#001122');
        formatDefault('3rd position', '3rr45', '#333333');
        formatDefault('4th position', '6r7r8', '#667788');
        formatDefault('5th position', '9ArrB', '#9A9A9A');
        formatDefault('6th position', 'CDrEr', '#CCDDEE');
        formatDefault('7th position', 'F01rr', '#FF0011');
      });
    });

    describe('3 invalid characters', () => {
      describe('1 valid character', () => {
        formatDefault('1st position', 'rrr0', false);
        formatDefault('2nd position', 'rr1r', false);
        formatDefault('3rd position', 'r2rr', '#222222');
        formatDefault('4th position', '3rrr', '#333333');
      });
      describe('2 valid characters', () => {
        formatDefault('1st position', 'rrr45', false);
        formatDefault('2nd position', 'rr6r7', false);
        formatDefault('3rd position', 'r8rr9', '#888888');
        formatDefault('4th position', 'ArrrB', '#AAAAAA');
        formatDefault('5th position', 'CrrDr', '#CCCCCC');
        formatDefault('6th position', 'ErFrr', '#EFEFEF');
        formatDefault('7th position', '01rrr', '#010101');
      });
      describe('3 valid characters', () => {
        formatDefault('1st position', 'rrr234', false);
        formatDefault('2nd position', 'rr5r67', false);
        formatDefault('3rd position', 'r8rr9A', '#888888');
        formatDefault('4th position', 'BrrrCD', '#BBBBBB');
        formatDefault('5th position', 'ErrFr0', '#EEEEEE');
        formatDefault('6th position', '1r2rr3', '#121212');
        formatDefault('7th position', '45rrr6', '#454545');
        formatDefault('8th position', '78rr9r', '#787878');
        formatDefault('9th position', 'ABrCrr', '#AABBCC');
        formatDefault('10th position', 'DEFrrr', '#DDEEFF');
      });
    });
  });
});
