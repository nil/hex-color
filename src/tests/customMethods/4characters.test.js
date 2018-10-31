import { customMethods } from '../utils';

describe('Custom methods', () => {
  describe('4 valid characters', () => {
    customMethods(4, '0A1B', false, 'invalid');
    customMethods(4, 'C2D3', '#CC22DD', 'altern');
    customMethods(4, '4E5F', '#4E5F4E', 'repeat');
    customMethods(4, 'A6B7', '#A6B700', 'fill');
  });
});
