import { customOptions } from '../utils';

const objFalse = {
  allValid: false
};

const objTrue = {
  allValid: true
};

describe('Custom options', () => {
  describe('All valid', () => {
    describe('False', () => {
      customOptions('1 invalid character', '0r', '#000000', objFalse);
      customOptions('2 invalid characters', 'r1r', '#111111', objFalse);
      customOptions('3 invalid characters', 'r2r3r', '#232323', objFalse);
      customOptions('4 invalid characters', 'r4r5r6r', '#445566', objFalse);
      customOptions('5 invalid characters', 'r7r8r9rAr', '#778899', objFalse);
    });
    describe('True', () => {
      customOptions('1 invalid character', '0r', false, objTrue);
      customOptions('2 invalid characters', 'r1r', false, objTrue);
      customOptions('3 invalid characters', 'r2r3r', false, objTrue);
      customOptions('4 invalid characters', 'r4r5r6r', false, objTrue);
      customOptions('5 invalid characters', 'r7r8r9rAr', false, objTrue);
    });
  });
});
