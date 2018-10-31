import { customMethods } from '../utils';

describe('Custom methods', () => {
  describe('3 valid characters', () => {
    customMethods(3, '0A1', false, 'invalid');
    customMethods(3, 'B2C', '#BB22CC', 'altern');
  });
});
