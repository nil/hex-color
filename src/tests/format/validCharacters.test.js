import { formatDefault } from '../utils';

describe('Default options', () => {
  describe('Valid characters', () => {
    formatDefault('1 character', '0', '#000000');
    formatDefault('2 characters', '12', '#121212');
    formatDefault('3 characters', '345', '#334455');
    formatDefault('4 characters', '6789', '#667788');
    formatDefault('5 characters', 'ABCDE', '#AABBCC');
    formatDefault('6 characters', 'F01234', '#F01234');
    formatDefault('7 characters', '56789AB', '#56789A');
    formatDefault('10 characters', 'CDEF012345', '#CDEF01');
  });
});
