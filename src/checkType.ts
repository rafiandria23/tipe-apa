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
} from '@/methods';

export interface Output {
  type: string;
  target?: any;
}

export default function checkType(input?: any): Output | void {
  if (isString(input)) {
    return {
      type: 'String',
      target: input
    };
  } else if (isNumber(input)) {
    return {
      type: 'Number',
      target: input
    };
  } else if (isArray(input)) {
    return {
      type: 'Array',
      target: input
    };
  } else if (isObject(input)) {
    return {
      type: 'Object',
      target: input
    };
  } else if (isFunction(input)) {
    return {
      type: 'Function',
      target: input
    };
  } else if (isNull(input)) {
    return {
      type: 'Null',
      target: input
    };
  } else if (isUndefined(input)) {
    return {
      type: 'Undefined',
      target: input
    };
  } else if (isBoolean(input)) {
    return {
      type: 'Boolean',
      target: input
    };
  } else if (isRegExp(input)) {
    return {
      type: 'RegExp',
      target: input
    };
  } else if (isError(input)) {
    return {
      type: 'Error',
      target: input
    };
  } else if (isDate(input)) {
    return {
      type: 'Date',
      target: input
    };
  } else if (isSymbol(input)) {
    return {
      type: 'Symbol',
      target: input
    };
  }

  return;
}
