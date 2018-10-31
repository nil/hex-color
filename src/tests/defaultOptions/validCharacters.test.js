import { defaultOptions } from '../utils';

describe('Default options', () => {
  describe('Valid characters', () => {
    defaultOptions('1 character', '0', '#000000');
    defaultOptions('2 characters', '12', '#121212');
    defaultOptions('3 characters', '345', '#334455');
    defaultOptions('4 characters', '6789', '#667788');
    defaultOptions('5 characters', 'ABCDE', '#AABBCC');
    defaultOptions('6 characters', 'F01234', '#F01234');
    defaultOptions('7 characters', '56789AB', '#56789A');
    defaultOptions('10 characters', 'CDEF012345', '#CDEF01');
  });
});
