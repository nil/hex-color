# hex-format

Turn a string into a 6-digit hex color value.

Most color inputs accept hex values, but only if they are the standard, 6-digit format. They reject possible mistakes and shorter codes, which results in a bad user experience. hex-format is written to format a given string and return a valid, 6-digit hex code ready to be used in JavaScript and CSS.

[![Build status](https://travis-ci.org/nil/hex-format.svg?branch=master)](https://travis-ci.org/nil/hex-format)
[![Dependencies status](https://img.shields.io/david/dev/nil/hex-format.svg)](https://david-dm.org/nil/hex-format)
[![Version](https://img.shields.io/npm/v/hex-format.svg)](https://www.npmjs.com/package/hex-format)
[![License](https://img.shields.io/npm/l/hex-format.svg)](https://github.com/nil/hex-format/blob/master/LICENSE)

## Installation

Open Terminal and install the package with this command:

```sh
npm install hex-format --save
```

Then import hex-format into any file you are planning to use it:

```js
// Node's require()
const Hex = require('hex-format');

// ES6 imports
import Hex from 'hex-format';
```

Finally, call hex-format’s class. If you want to use the default options, remove `[options]`, otherwise, replace it with an object. Find all the available options in [its section](#options).

```js
const hex = new Hex([options]);
```

Now you are ready to use hex-format.


## API

### `.format`

Returns `false` or a valid, 6-digit hex color code.

```js
hex.format('154') //=> #115544
hex.format('#a9') //=> #A9A9A9
hex.format('#xx9') //=> false
```

## Options

This options allow you to configure the behavior of a string when it its formatted.

### Methods

Replace the default format algorithm with another predefined one.

**key**: number of valid characters (7 if there are more than 6).

| Value      | Description                               | Valid for        | Example             |
|------------|-------------------------------------------|------------------|---------------------|
| `invalid`  | Always returns false                      | 1, 2, 3, 4, 5, 7 | 3A => false         |
| `altern`   | Doubles or triples the characters         | 1, 2, 3, 4, 5    | B1C => #BB11CC      |
| `repeat`   | Repeat the characters until the end       | 1, 2, 4, 5, 6    | 5EF1 => #55EEFF     |
| `fill`     | Fill the extra space with 0               | 1, 2, 4, 5, 6    | 2D => #2D0000       |
| `equal`    | The result is the same as the given value | 6                | 6E7F2D => #6E7F2D   |
| `truncate` | Takes only the 6 first characters         | 6, 7             | E8F1C6A5 => #E8F1C6 |

Example:

```js
const hex = Hex({
  1: 'repeat',
  4: 'fill'
  7: 'invalid'
})
```

## About

### Contributing

If you find any issue, have troubles figuring out something or want to suggest a change, please [open an issue](https://github.com/nil/hex-format/issues/new) or [make a pull request](https://github.com/nil/hex-format/compare).
</details>

### Tests
To run the tests, first install the dev dependencies and then run the `test` command:

```sh
npm install -d && npm test
```

### License
© 2018 [Nil Vila](https://twitter.com/nilvilam). Released under the [MIT License](https://github.com/nil/hex-format/blob/master/LICENSE).
