# Tipe Apa

[![Build Status](https://travis-ci.com/rafiandria23/tipe-apa.svg?branch=main)](https://travis-ci.com/rafiandria23/tipe-apa)
![npm Version](https://img.shields.io/npm/v/tipe-apa)
![npm Package Minimized gzipped Size (Select Exports)](https://img.shields.io/bundlejs/size/tipe-apa)
![npm Downloads](https://img.shields.io/npm/dm/tipe-apa)
![License](https://img.shields.io/npm/l/tipe-apa)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=rafiandria23_tipe-apa&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=rafiandria23_tipe-apa)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=rafiandria23_tipe-apa&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=rafiandria23_tipe-apa)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=rafiandria23_tipe-apa&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=rafiandria23_tipe-apa)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=rafiandria23_tipe-apa&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=rafiandria23_tipe-apa)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=rafiandria23_tipe-apa&metric=coverage)](https://sonarcloud.io/summary/new_code?id=rafiandria23_tipe-apa)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=rafiandria23_tipe-apa&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=rafiandria23_tipe-apa)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=rafiandria23_tipe-apa&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=rafiandria23_tipe-apa)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=rafiandria23_tipe-apa&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=rafiandria23_tipe-apa)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=rafiandria23_tipe-apa&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=rafiandria23_tipe-apa)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=rafiandria23_tipe-apa&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=rafiandria23_tipe-apa)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=rafiandria23_tipe-apa&metric=bugs)](https://sonarcloud.io/summary/new_code?id=rafiandria23_tipe-apa)

Simple JavaScript data type checker.

## Getting Started

Using npm

```sh
npm install tipe-apa
```

Using Yarn

```sh
yarn add tipe-apa
```

## Usage

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

- `checkType(input: any): { type: string, target: any }`
  - `type`
    - `string`
    - `number`
    - `array`
    - `object`
    - `function`
    - `null`
    - `undefined`
    - `boolean`
    - `regexp`
    - `error`
    - `date`
    - `symbol`
  - `target`
    - `typeof input`
- `isString(input: any): boolean`
- `isNumber(input: any): boolean`
- `isArray(input: any): boolean`
- `isObject(input: any): boolean`
- `isFunction(input: any): boolean`
- `isNull(input: any): boolean`
- `isUndefined(input: any): boolean`
- `isBoolean(input: any): boolean`
- `javascript isRegExp(input: any): boolean`
- `isError(input: any): boolean`
- `isDate(input: any): boolean`
- `isSymbol(input: any): boolean`

## License

[MIT](LICENSE)
