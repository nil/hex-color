const hex = require('../index.js');

module.exports = function (name, input, output) {
  test(name, () => {
    expect(hex(`#${input}`)).toBe(output);
    expect(hex(input)).toBe(output);
    expect(hex(`#${input}`)).toBe(hex(input));
  });
};
