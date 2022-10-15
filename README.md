# Tipe Apa

[![NPM Version](https://badge.fury.io/js/tipe-apa.svg)](https://badge.fury.io/js/tipe-apa)
[![Build Status](https://travis-ci.com/rafiandria23/tipe-apa.svg?branch=master)](https://travis-ci.com/rafiandria23/tipe-apa)
[![Coverage Status](https://coveralls.io/repos/github/rafiandria23/tipe-apa/badge.svg)](https://coveralls.io/github/rafiandria23/tipe-apa)
[![Install Size](https://packagephobia.now.sh/badge?p=tipe-apa)](https://packagephobia.now.sh/result?p=tipe-apa)
[![NPM Downloads](https://img.shields.io/npm/dm/tipe-apa.svg?style=flat-square)](http://npm-stat.com/charts.html?package=tipe-apa)
[![GitHub issues](https://img.shields.io/github/issues/rafiandria23/tipe-apa)](https://github.com/rafiandria23/tipe-apa/issues)
[![GitHub forks](https://img.shields.io/github/forks/rafiandria23/tipe-apa)](https://github.com/rafiandria23/tipe-apa/network)
[![GitHub stars](https://img.shields.io/github/stars/rafiandria23/tipe-apa)](https://github.com/rafiandria23/tipe-apa/stargazers)
[![GitHub license](https://img.shields.io/github/license/rafiandria23/tipe-apa)](https://github.com/rafiandria23/tipe-apa/blob/master/LICENSE)

Simple JavaScript data type checker.

## Installation

Using NPM:

```sh
npm install tipe-apa
```

Using Yarn:

```sh
yarn add tipe-apa
```

## Usage

#### Checking Any or Random Data Type

```javascript
// CommonJS
const { checkType } = require('tipe-apa');

// ES6
import { checkType } from 'tipe-apa';

const checkTargets = {
  string: 'This is string!',
  number: 123,
  object: {
    a: 'a',
    b: 'b',
    c: 'c'
  },
  function: () => console.log('This is function!'),
  null: null,
  undefined: undefined,
  boolean: false,
  regexp: /thisisregexp/i,
  error: new Error('This is error!'),
  date: new Date(Date.now()),
  symbol: Symbol('This is symbol!')
};

for (const key in checkTargets) {
  console.log(checkType(checkTargets[key]));
}

/**
 * Expected Outputs:
 * 
 * { type: 'string', target: 'This is string!' }
 * { type: 'number', target: 123 }
 * { type: 'object', target: { a: 'a', b: 'b', c: 'c' } }
 * { type: 'function', target: [Function: function] }
 * { type: 'null', target: null }
 * { type: 'undefined', target: undefined }
 * { type: 'boolean', target: false }
 * { type: 'regexp', target: /thisisregexp/i }
 * {
 *   type: 'error',
 *   target: Error: This is error!
 *     at Object.<anonymous> (/home/adamrafiandri/Desktop/js-sandbox/index.js:16:10)
 *     at Module._compile (internal/modules/cjs/loader.js:1158:30)
 *     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1178:10)
 *     at Module.load (internal/modules/cjs/loader.js:1002:32)
 *     at Function.Module._load (internal/modules/cjs/loader.js:901:14)
 *     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
 *     at internal/main/run_main_module.js:18:47
 * }
 * { type: 'date', target: 2020-04-12T10:59:15.411Z }
 * { type: 'symbol', target: Symbol(This is symbol!) }
 */
```

## Tipe Apa API

##### isString(input: any): boolean

##### isNumber(input: any): boolean

##### isArray(input: any): boolean

##### isObject(input: any): boolean

##### isFunction(input: any): boolean

##### isNull(input: any): boolean

##### isUndefined(input: any): boolean

##### isBoolean(input: any): boolean

##### isRegExp(input: any): boolean

##### isError(input: any): boolean

##### isDate(input: any): boolean

##### isSymbol(input: any): boolean

## License

[MIT](LICENSE)
