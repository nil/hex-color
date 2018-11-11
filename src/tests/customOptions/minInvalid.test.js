import { formatCustom } from '../utils';

const obj1 = {
  minInvalid: 1
};
const obj2 = {
  minInvalid: 2
};
const obj3 = {
  minInvalid: 3
};
const obj5 = {
  minInvalid: 5
};
const obj10 = {
  minInvalid: 10
};

describe('Custom options', () => {
  describe('Min valid', () => {
    describe('Minimum 1', () => {
      formatCustom('1 invalid character', '0r', '#000000', obj1);
      formatCustom('2 invalid characters separated', 'r1r', false, obj1);
      formatCustom('2 invalid characters together', 'rr2', false, obj1);
      formatCustom('3 invalid characters separated', 'r3r4r', false, obj1);
      formatCustom('4 invalid characters together', '5r6rrrr78', '#555555', obj1);
      formatCustom('5 invalid characters separated', 'r9rArBrCr', false, obj1);
      formatCustom('7 invalid characters together', 'DErrFrrrrrrr012', '#DEDEDE', obj1);
      formatCustom('10 invalid characters separated', '3r4r5r6r7r8r9rArBrCrD', '#333333', obj1);
      formatCustom('12 invalid characters together', 'rrrrrrrrrrrrEF', false, obj1);
    });
    describe('Minimum 2', () => {
      formatCustom('1 invalid character', '0r', '#000000', obj2);
      formatCustom('2 invalid characters separated', 'r1r', '#111111', obj2);
      formatCustom('2 invalid characters together', 'rr2', false, obj2);
      formatCustom('3 invalid characters separated', 'r3r4r', '#343434', obj2);
      formatCustom('4 invalid characters together', '5r6rrrr78', '#565656', obj2);
      formatCustom('5 invalid characters separated', 'r9rArBrCr', '#99AABB', obj2);
      formatCustom('7 invalid characters together', 'DErrFrrrrrrr012', '#DEDEDE', obj2);
      formatCustom('10 invalid characters separated', '3r4r5r6r7r8r9rArBrCrD', '#345678', obj2);
      formatCustom('12 invalid characters together', 'rrrrrrrrrrrrEF', false, obj2);
    });
    describe('Minimum 3', () => {
      formatCustom('1 invalid character', '0r', '#000000', obj3);
      formatCustom('2 invalid characters separated', 'r1r', '#111111', obj3);
      formatCustom('2 invalid characters together', 'rr2', '#222222', obj3);
      formatCustom('3 invalid characters separated', 'r3r4r', '#343434', obj3);
      formatCustom('4 invalid characters together', '5r6rrrr78', '#565656', obj3);
      formatCustom('5 invalid characters separated', 'r9rArBrCr', '#99AABB', obj3);
      formatCustom('7 invalid characters together', 'DErrFrrrrrrr012', '#DDEEFF', obj3);
      formatCustom('10 invalid characters separated', '3r4r5r6r7r8r9rArBrCrD', '#345678', obj3);
      formatCustom('12 invalid characters together', 'rrrrrrrrrrrrEF', false, obj3);
    });
    describe('Minimum 5', () => {
      formatCustom('1 invalid character', '0r', '#000000', obj5);
      formatCustom('2 invalid characters separated', 'r1r', '#111111', obj5);
      formatCustom('2 invalid characters together', 'rr2', '#222222', obj5);
      formatCustom('3 invalid characters separated', 'r3r4r', '#343434', obj5);
      formatCustom('4 invalid characters together', '5r6rrrr78', '#556677', obj5);
      formatCustom('5 invalid characters separated', 'r9rArBrCr', '#99AABB', obj5);
      formatCustom('7 invalid characters together', 'DErrFrrrrrrr012', '#DDEEFF', obj5);
      formatCustom('10 invalid characters separated', '3r4r5r6r7r8r9rArBrCrD', '#345678', obj5);
      formatCustom('12 invalid characters together', 'rrrrrrrrrrrrEF', false, obj5);
    });
    describe('Minimum 10', () => {
      formatCustom('1 invalid character', '0r', '#000000', obj10);
      formatCustom('2 invalid characters separated', 'r1r', '#111111', obj10);
      formatCustom('2 invalid characters together', 'rr2', '#222222', obj10);
      formatCustom('3 invalid characters separated', 'r3r4r', '#343434', obj10);
      formatCustom('4 invalid characters together', '5r6rrrr78', '#556677', obj10);
      formatCustom('5 invalid characters separated', 'r9rArBrCr', '#99AABB', obj10);
      formatCustom('7 invalid characters together', 'DErrFrrrrrrr012', '#DEF012', obj10);
      formatCustom('10 invalid characters separated', '3r4r5r6r7r8r9rArBrCrD', '#345678', obj10);
      formatCustom('12 invalid characters together', 'rrrrrrrrrrrrEF', false, obj10);
    });
  });
});
