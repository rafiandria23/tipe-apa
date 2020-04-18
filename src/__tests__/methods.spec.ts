import {
  isString,
  isNumber,
  isArray,
  isObject,
  isFunction,
  isNull,
  isUndefined,
  isBoolean,
  isRegExp,
  isError,
  isDate,
  isSymbol
} from '../index';

describe('Test All Methods', () => {
  test('isString Method - True', () => {
    const exString = isString("This is string!");
    expect(exString).toBe(true);
  });

  test('isString - False', () => {
    const exString = isString(123456);
    expect(exString).toBe(false);
  });


  test('isNumber Method - True', () => {
    const exNumber = isNumber(123456);
    expect(exNumber).toBe(true);
  });

  test('isNumber - False', () => {
    const exNumber = isNumber("This is string!");
    expect(exNumber).toBe(false);
  });


  test('isArray Method - True', () => {
    const exArray = isArray(['a', 'b', 'c']);
    expect(exArray).toBe(true);
  });

  test('isArray - False', () => {
    const exArray = isArray("This is string!");
    expect(exArray).toBe(false);
  });


  test('isObject Method - True', () => {
    const exObject = isObject({ a: 'a', b: 'b', c: 'c'});
    expect(exObject).toBe(true);
  });

  test('isObject - False', () => {
    const exObject = isObject("This is string!");
    expect(exObject).toBe(false);
  });


  test('isFunction Method - True', () => {
    const exFunction = isFunction(() => console.log('This is function!'));
    expect(exFunction).toBe(true);
  });

  test('isFunction - False', () => {
    const exFunction = isFunction("This is string!");
    expect(exFunction).toBe(false);
  });


  test('isNull Method - True', () => {
    const exNull = isNull(null);
    expect(exNull).toBe(true);
  });

  test('isNull - False', () => {
    const exNull = isNull("This is string!");
    expect(exNull).toBe(false);
  });


  test('isUndefined Method - True', () => {
    const exUndefined = isUndefined(undefined);
    expect(exUndefined).toBe(true);
  });

  test('isUndefined - False', () => {
    const exUndefined = isUndefined("This is string!");
    expect(exUndefined).toBe(false);
  });


  test('isBoolean Method - True', () => {
    const exBoolean = isBoolean(false);
    expect(exBoolean).toBe(true);
  });

  test('isBoolean - False', () => {
    const exBoolean = isBoolean("This is string!");
    expect(exBoolean).toBe(false);
  });


  test('isRegExp Method - True', () => {
    const exRegExp = isRegExp(/w3schools/i);
    expect(exRegExp).toBe(true);
  });

  test('isRegExp - False', () => {
    const exRegExp = isRegExp("This is string!");
    expect(exRegExp).toBe(false);
  });


  test('isError Method - True', () => {
    const exError = isError(new Error("This is error!"));
    expect(exError).toBe(true);
  });

  test('isError - False', () => {
    const exError = isError("This is string!");
    expect(exError).toBe(false);
  });


  test('isDate Method - True', () => {
    const exDate = isDate(new Date(Date.now()));
    expect(exDate).toBe(true);
  });

  test('isDate - False', () => {
    const exDate = isDate("This is string!");
    expect(exDate).toBe(false);
  });

  test('isSymbol Method - True', () => {
    const exSymbol = isSymbol(Symbol('This is symbol!'));
    expect(exSymbol).toBe(true);
  });

  test('isSymbol - False', () => {
    const exSymbol = isSymbol("This is string!");
    expect(exSymbol).toBe(false);
  });
});
