import { customMethods } from '../utils';

describe('Custom methods', () => {
  describe('5 valid characters', () => {
    customMethods(5, '0A1B2', false, 'invalid');
    customMethods(5, 'C3D4E', '#CC33DD', 'altern');
    customMethods(5, '5F6A7', '#5F6A75', 'repeat');
    customMethods(5, 'B8C9D', '#B8C9D0', 'fill');
  });
});
