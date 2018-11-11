import Hex from '../index';

const hex = new Hex();

export function formatDefault(name, input, output) {
  test(name, () => {
    expect(hex.format(`#${input}`)).toBe(output);
    expect(hex.format(input)).toBe(output);
    expect(hex.format(`#${input}`)).toBe(hex.format(input));
  });
}

export function formatCustom(name, input, output, options) {
  const customHex = new Hex(options);

  test(name, () => {
    expect(customHex.format(`#${input}`)).toBe(output);
    expect(customHex.format(input)).toBe(output);
    expect(customHex.format(`#${input}`)).toBe(customHex.format(input));
  });
}

export function methodCustom(length, input, output, method) {
  const options = {};
  options[length] = method;

  const customHex = new Hex(options);

  test(method, () => {
    expect(customHex.format(`#${input}`)).toBe(output);
    expect(customHex.format(input)).toBe(output);
    expect(customHex.format(`#${input}`)).toBe(customHex.format(input));
  });
}
