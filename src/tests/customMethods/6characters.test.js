import { customMethods } from '../utils';

describe('Custom methods', () => {
  describe('6 valid characters', () => {
    customMethods(6, '0A1B2C', '#0A1B2C', 'repeat');
    customMethods(6, 'D3E4F5', '#D3E4F5', 'fill');
    customMethods(6, '6A7B8C', '#6A7B8C', 'equal');
    customMethods(6, 'D9E0F1', '#D9E0F1', 'truncate');
  });
});
