import { formatCustom } from '../utils';

const objFalse = {
  allValid: false
};

const objTrue = {
  allValid: true
};

describe('Custom options', () => {
  describe('All valid', () => {
    describe('False', () => {
      formatCustom('1 invalid character', '0r', '#000000', objFalse);
      formatCustom('2 invalid characters', 'r1r', '#111111', objFalse);
      formatCustom('3 invalid characters', 'r2r3r', '#232323', objFalse);
      formatCustom('4 invalid characters', 'r4r5r6r', '#445566', objFalse);
      formatCustom('5 invalid characters', 'r7r8r9rAr', '#778899', objFalse);
    });
    describe('True', () => {
      formatCustom('1 invalid character', '0r', false, objTrue);
      formatCustom('2 invalid characters', 'r1r', false, objTrue);
      formatCustom('3 invalid characters', 'r2r3r', false, objTrue);
      formatCustom('4 invalid characters', 'r4r5r6r', false, objTrue);
      formatCustom('5 invalid characters', 'r7r8r9rAr', false, objTrue);
    });
  });
});
