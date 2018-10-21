# hex-format

Turn a string into a 6-digit hex color value.

Most color inputs accept hex values, but only if they are the standard, 6-digit format. They reject possible mistakes and shorter codes, which results in a bad user experience. hex-format is written to format a given string and return a valid, 6-digit hex code ready to be used in JavaScript and CSS.

[![Build status](https://travis-ci.org/nil/hex-format.svg?branch=master)](https://travis-ci.org/nil/hex-format)
[![Dependencies status](https://img.shields.io/david/dev/nil/hex-format.svg)](https://david-dm.org/nil/hex-format)
[![Version](https://img.shields.io/npm/v/hex-format.svg)](https://www.npmjs.com/package/hex-format)
[![License](https://img.shields.io/npm/l/hex-format.svg)](https://github.com/nil/hex-format/blob/master/LICENSE)

## Installation

There are two ways to install hex-format. A [package manager](#npm) is optimal if you are working with Node, whereas [HTML's script tag](#script-tag) is better for browser-based projects.

### npm

Open Terminal and install the package with this command:

```sh
npm install hex-format --save
```

Then import hex-format into any file you are planning to use it:

```js
// Node's require()
const hexFormat = require('hex-format');

// ES6 imports
import hexFormat from 'hex-format';
```

Now you are ready to use hex-format.

### <script> tag

Include the following code in your HTML file, replacing the path with the actual path to the JavaScript file:

```html
<script src="path/to/hex-format.js"></script>
```

hex-format's source code is available [uncompressed](https://raw.githubusercontent.com/nil/hex-format/master/src/index.js), [minified](https://raw.githubusercontent.com/nil/hex-format/master/src/index.min.js) and on [unpkg](https://unpkg.com/hex-format).

## Usage

From now on, you can use `hexFormat(value)`:

```js
hexFormat('154') //=> #115544
hexFormat('#a9') //=> #A9A9A9
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
