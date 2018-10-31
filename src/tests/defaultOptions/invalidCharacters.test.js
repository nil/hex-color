import { defaultOptions } from '../utils';

describe('Default options', () => {
  describe('Inalid characters', () => {
    describe('All invalid characters', () => {
      defaultOptions('1 character', 'r', false);
      defaultOptions('2 characters', 'st', false);
      defaultOptions('Accents', 'àvçđë', false);
      defaultOptions('Symbols', '$%&:;', false);
    });

    describe('1 invalid character', () => {
      describe('1 valid character', () => {
        defaultOptions('1st position', 'r0', '#000000');
        defaultOptions('2nd position', '1r', '#111111');
      });
      describe('2 valid characters', () => {
        defaultOptions('1st position', 'r23', '#232323');
        defaultOptions('2nd position', '4r5', '#454545');
        defaultOptions('3rd position', '67r', '#676767');
      });
      describe('3 valid characters', () => {
        defaultOptions('1st position', 'r89A', '#8899AA');
        defaultOptions('2nd position', 'BrCD', '#BBCCDD');
        defaultOptions('3rd position', 'EFr0', '#EEFF00');
        defaultOptions('4th position', '123r', '#112233');
      });
      describe('4 valid characters', () => {
        defaultOptions('1st position', 'r4567', '#445566');
        defaultOptions('2nd position', '8r9AB', '#8899AA');
        defaultOptions('3rd position', 'CDrEF', '#CCDDEE');
        defaultOptions('4th position', '012r3', '#001122');
        defaultOptions('5th position', '4567r', '#445566');
      });
    });

    describe('2 invalid characters', () => {
      describe('1 valid character', () => {
        defaultOptions('1st position', 'rr0', false);
        defaultOptions('2nd position', 'r1r', '#111111');
        defaultOptions('3rd position', '2rr', '#222222');
      });
      describe('2 valid characters', () => {
        defaultOptions('1st position', 'rr34', false);
        defaultOptions('2nd position', 'r5r6', '#565656');
        defaultOptions('3rd position', '7rr8', '#777777');
        defaultOptions('4th position', '9rAr', '#9A9A9A');
        defaultOptions('5th position', 'BCrr', '#BCBCBC');
      });
      describe('3 valid characters', () => {
        defaultOptions('1st position', 'rrDEF', false);
        defaultOptions('2nd position', 'r0r12', '#001122');
        defaultOptions('3rd position', '3rr45', '#333333');
        defaultOptions('4th position', '6r7r8', '#667788');
        defaultOptions('5th position', '9ArrB', '#9A9A9A');
        defaultOptions('6th position', 'CDrEr', '#CCDDEE');
        defaultOptions('7th position', 'F01rr', '#FF0011');
      });
    });

    describe('3 invalid characters', () => {
      describe('1 valid character', () => {
        defaultOptions('1st position', 'rrr0', false);
        defaultOptions('2nd position', 'rr1r', false);
        defaultOptions('3rd position', 'r2rr', '#222222');
        defaultOptions('4th position', '3rrr', '#333333');
      });
      describe('2 valid characters', () => {
        defaultOptions('1st position', 'rrr45', false);
        defaultOptions('2nd position', 'rr6r7', false);
        defaultOptions('3rd position', 'r8rr9', '#888888');
        defaultOptions('4th position', 'ArrrB', '#AAAAAA');
        defaultOptions('5th position', 'CrrDr', '#CCCCCC');
        defaultOptions('6th position', 'ErFrr', '#EFEFEF');
        defaultOptions('7th position', '01rrr', '#010101');
      });
      describe('3 valid characters', () => {
        defaultOptions('1st position', 'rrr234', false);
        defaultOptions('2nd position', 'rr5r67', false);
        defaultOptions('3rd position', 'r8rr9A', '#888888');
        defaultOptions('4th position', 'BrrrCD', '#BBBBBB');
        defaultOptions('5th position', 'ErrFr0', '#EEEEEE');
        defaultOptions('6th position', '1r2rr3', '#121212');
        defaultOptions('7th position', '45rrr6', '#454545');
        defaultOptions('8th position', '78rr9r', '#787878');
        defaultOptions('9th position', 'ABrCrr', '#AABBCC');
        defaultOptions('10th position', 'DEFrrr', '#DDEEFF');
      });
    });
  });
});
