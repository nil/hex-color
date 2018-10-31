import { customMethods } from '../utils';

describe('Custom methods', () => {
  describe('1 valid character', () => {
    customMethods(1, '0', false, 'invalid');
    customMethods(1, '1', '#111111', 'altern');
    customMethods(1, 'A', '#AAAAAA', 'repeat');
    customMethods(1, 'B', '#B00000', 'fill');
  });
});
