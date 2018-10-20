# hex-format

Given any string, this module it transforms it into a valid, 6-digit hexadecimal code, ready to be used as a CSS color. `hex-format` is designed to return a proper hex code after a user gives one.

```js
'#123456' // => #123456
'#A6' // => #A6A6A6
'4B7' // => #44BB77
'a6tb' // => #AA66BB
'#TYWF' // => false
'9' // => #999999
'#ÀÇ' // => false
```

## Installation

#### NodeJS

```sh
# Yarn
yarn add hex-format

# NPM
npm install hex-format --save
```

```js
const hexFormat = require('hex-format');

hexFormat('#42') // => #424242
hexFormat('a1d') // => #AA11DD
```

#### Browser

```html
<script src="./hex-format.js"></script>
```

```js
let hex1 = hexFormat('#42') // => #424242
let hex2 = hexFormat('a1d') // => #AA11DD
```
