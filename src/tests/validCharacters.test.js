const simpleTest = require('./_utils.js');

describe('Valid characters', () => {
  simpleTest('1 character', '0', '#000000');
  simpleTest('2 characters', '12', '#121212');
  simpleTest('3 characters', '345', '#334455');
  simpleTest('4 characters', '6789', '#667788');
  simpleTest('5 characters', 'ABCDE', '#AABBCC');
  simpleTest('6 characters', 'F01234', '#F01234');
  simpleTest('7 characters', '56789AB', '#56789A');
  simpleTest('10 characters', 'CDEF012345', '#CDEF01');
});
