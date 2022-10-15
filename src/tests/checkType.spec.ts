import checkType from '../';

describe('Check Type General Function Test', () => {
  test('Check Type -  String', () => {
    const target = 'This is string!';
    const exString: any = checkType(target);
    expect(exString).toHaveProperty('type');
    expect(exString).toHaveProperty('target');
    expect(exString.type).toBe('string');
    expect(exString.target).toBe(target);
  });

  test('Check Type - Number', () => {
    const target = 123456;
    const exNumber: any = checkType(target);
    expect(exNumber).toHaveProperty('type');
    expect(exNumber).toHaveProperty('target');
    expect(exNumber.type).toBe('number');
    expect(exNumber.target).toBe(target);
  });

  test('Check Type - Array', () => {
    const target = ['a', 'b', 'c'];
    const exArray: any = checkType(target);
    expect(exArray).toHaveProperty('type');
    expect(exArray).toHaveProperty('target');
    expect(exArray.type).toBe('array');
    expect(exArray.target).toBe(target);
  });

  test('Check Type - Object', () => {
    const target = { a: 'a', b: 'b', c: 'c' };
    const exObject: any = checkType(target);
    expect(exObject).toHaveProperty('type');
    expect(exObject).toHaveProperty('target');
    expect(exObject.type).toBe('object');
    expect(exObject.target).toBe(target);
  });

  test('Check Type - Function', () => {
    const target = () => console.log('This is function!');
    const exFunction: any = checkType(target);
    expect(exFunction).toHaveProperty('type');
    expect(exFunction).toHaveProperty('target');
    expect(exFunction.type).toBe('function');
    expect(exFunction.target).toBe(target);
  });

  test('Check Type - Null', () => {
    const target = null;
    const exNull: any = checkType(target);
    expect(exNull).toHaveProperty('type');
    expect(exNull).toHaveProperty('target');
    expect(exNull.type).toBe('null');
    expect(exNull.target).toBe(target);
  });

  test('Check Type - Undefined', () => {
    const target = undefined;
    const exUndefined: any = checkType(target);
    expect(exUndefined).toHaveProperty('type');
    expect(exUndefined).toHaveProperty('target');
    expect(exUndefined.type).toBe('undefined');
    expect(exUndefined.target).toBe(target);
  });

  test('Check Type - Boolean', () => {
    const target = false;
    const exBoolean: any = checkType(target);
    expect(exBoolean).toHaveProperty('type');
    expect(exBoolean).toHaveProperty('target');
    expect(exBoolean.type).toBe('boolean');
    expect(exBoolean.target).toBe(target);
  });

  test('Check Type - RegExp', () => {
    const target = /w3schools/i;
    const exRegExp: any = checkType(target);
    expect(exRegExp).toHaveProperty('type');
    expect(exRegExp).toHaveProperty('target');
    expect(exRegExp.type).toBe('regexp');
    expect(exRegExp.target).toBe(target);
  });

  test('Check Type - Error', () => {
    const target = new Error('This is error!');
    const exError: any = checkType(target);
    expect(exError).toHaveProperty('type');
    expect(exError).toHaveProperty('target');
    expect(exError.type).toBe('error');
    expect(exError.target).toBe(target);
  });

  test('Check Type - Date', () => {
    const target = new Date(Date.now());
    const exDate: any = checkType(target);
    expect(exDate).toHaveProperty('type');
    expect(exDate).toHaveProperty('target');
    expect(exDate.type).toBe('date');
    expect(exDate.target).toBe(target);
  });

  test('Check Type - Symbol', () => {
    const target = Symbol('This is symbol!');
    const exSymbol: any = checkType(target);
    expect(exSymbol).toHaveProperty('type');
    expect(exSymbol).toHaveProperty('target');
    expect(exSymbol.type).toBe('symbol');
    expect(exSymbol.target).toBe(target);
  });
});
