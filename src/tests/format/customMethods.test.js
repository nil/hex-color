import { methodCustom } from '../utils';

describe('Custom methods', () => {
  describe('1 valid character', () => {
    methodCustom(1, '0', false, 'invalid');
    methodCustom(1, '1', '#111111', 'altern');
    methodCustom(1, 'A', '#AAAAAA', 'repeat');
    methodCustom(1, 'B', '#B00000', 'fill');
  });

  describe('2 valid characters', () => {
    methodCustom(2, '0A', false, 'invalid');
    methodCustom(2, '1B', '#111BBB', 'altern');
    methodCustom(2, '2C', '#2C2C2C', 'repeat');
    methodCustom(2, '3D', '#3D0000', 'fill');
  });

  describe('3 valid characters', () => {
    methodCustom(3, '0A1', false, 'invalid');
    methodCustom(3, 'B2C', '#BB22CC', 'altern');
  });

  describe('4 valid characters', () => {
    methodCustom(4, '0A1B', false, 'invalid');
    methodCustom(4, 'C2D3', '#CC22DD', 'altern');
    methodCustom(4, '4E5F', '#4E5F4E', 'repeat');
    methodCustom(4, 'A6B7', '#A6B700', 'fill');
  });

  describe('5 valid characters', () => {
    methodCustom(5, '0A1B2', false, 'invalid');
    methodCustom(5, 'C3D4E', '#CC33DD', 'altern');
    methodCustom(5, '5F6A7', '#5F6A75', 'repeat');
    methodCustom(5, 'B8C9D', '#B8C9D0', 'fill');
  });

  describe('6 valid characters', () => {
    methodCustom(6, '0A1B2C', '#0A1B2C', 'repeat');
    methodCustom(6, 'D3E4F5', '#D3E4F5', 'fill');
    methodCustom(6, '6A7B8C', '#6A7B8C', 'equal');
    methodCustom(6, 'D9E0F1', '#D9E0F1', 'truncate');
  });

  describe('7 valid characters', () => {
    methodCustom(7, '0A1B2C3', false, 'invalid');
    methodCustom(7, 'D4E5F6A', '#D4E5F6', 'truncate');
  });
});
