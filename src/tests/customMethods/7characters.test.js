import { customMethods } from '../utils';

describe('Custom methods', () => {
  describe('7 valid characters', () => {
    customMethods(7, '0A1B2C3', false, 'invalid');
    customMethods(7, 'D4E5F6A', '#D4E5F6', 'truncate');
  });
});
