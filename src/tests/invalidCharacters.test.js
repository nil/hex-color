const simpleTest = require('./_utils.js');

simpleTest('1 character', 'r', false);

describe('Inalid characters', () => {
  describe('All invalid characters', () => {
    simpleTest('1 character', 'r', false);
    simpleTest('2 characters', 'st', false);
    simpleTest('Accents', 'àvçđë', false);
    simpleTest('Symbols', '$%&:;', false);
  });

  describe('1 invalid character', () => {
    describe('1 valid character', () => {
      simpleTest('1st position', 'r0', '#000000');
      simpleTest('2nd position', '1r', '#111111');
    });
    describe('2 valid characters', () => {
      simpleTest('1st position', 'r23', '#232323');
      simpleTest('2nd position', '4r5', '#454545');
      simpleTest('3rd position', '67r', '#676767');
    });
    describe('3 valid characters', () => {
      simpleTest('1st position', 'r89A', '#8899AA');
      simpleTest('2nd position', 'BrCD', '#BBCCDD');
      simpleTest('3rd position', 'EFr0', '#EEFF00');
      simpleTest('4th position', '123r', '#112233');
    });
    describe('4 valid characters', () => {
      simpleTest('1st position', 'r4567', '#445566');
      simpleTest('2nd position', '8r9AB', '#8899AA');
      simpleTest('3rd position', 'CDrEF', '#CCDDEE');
      simpleTest('4th position', '012r3', '#001122');
      simpleTest('5th position', '4567r', '#445566');
    });
  });

  describe('2 invalid characters', () => {
    describe('1 valid character', () => {
      simpleTest('1st position', 'rr0', false);
      simpleTest('2nd position', 'r1r', '#111111');
      simpleTest('3rd position', '2rr', '#222222');
    });
    describe('2 valid characters', () => {
      simpleTest('1st position', 'rr34', false);
      simpleTest('2nd position', 'r5r6', '#565656');
      simpleTest('3rd position', '7rr8', '#777777');
      simpleTest('4th position', '9rAr', '#9A9A9A');
      simpleTest('5th position', 'BCrr', '#BCBCBC');
    });
    describe('3 valid characters', () => {
      simpleTest('1st position', 'rrDEF', false);
      simpleTest('2nd position', 'r0r12', '#001122');
      simpleTest('3rd position', '3rr45', '#333333');
      simpleTest('4th position', '6r7r8', '#667788');
      simpleTest('5th position', '9ArrB', '#9A9A9A');
      simpleTest('6th position', 'CDrEr', '#CCDDEE');
      simpleTest('7th position', 'F01rr', '#FF0011');
    });
  });

  describe('3 invalid characters', () => {
    describe('1 valid character', () => {
      simpleTest('1st position', 'rrr0', false);
      simpleTest('2nd position', 'rr1r', false);
      simpleTest('3rd position', 'r2rr', '#222222');
      simpleTest('4th position', '3rrr', '#333333');
    });
    describe('2 valid characters', () => {
      simpleTest('1st position', 'rrr45', false);
      simpleTest('2nd position', 'rr6r7', false);
      simpleTest('3rd position', 'r8rr9', '#888888');
      simpleTest('4th position', 'ArrrB', '#AAAAAA');
      simpleTest('5th position', 'CrrDr', '#CCCCCC');
      simpleTest('6th position', 'ErFrr', '#EFEFEF');
      simpleTest('7th position', '01rrr', '#010101');
    });
    describe('3 valid characters', () => {
      simpleTest('1st position', 'rrr234', false);
      simpleTest('2nd position', 'rr5r67', false);
      simpleTest('3rd position', 'r8rr9A', '#888888');
      simpleTest('4th position', 'BrrrCD', '#BBBBBB');
      simpleTest('5th position', 'ErrFr0', '#EEEEEE');
      simpleTest('6th position', '1r2rr3', '#121212');
      simpleTest('7th position', '45rrr6', '#454545');
      simpleTest('8th position', '78rr9r', '#787878');
      simpleTest('9th position', 'ABrCrr', '#AABBCC');
      simpleTest('10th position', 'DEFrrr', '#DDEEFF');
    });
  });
});
