import { customMethods } from '../utils';

describe('Custom methods', () => {
  describe('2 valid characters', () => {
    customMethods(2, '0A', false, 'invalid');
    customMethods(2, '1B', '#111BBB', 'altern');
    customMethods(2, '2C', '#2C2C2C', 'repeat');
    customMethods(2, '3D', '#3D0000', 'fill');
  });
});
