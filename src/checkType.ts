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
} from './methods';

export interface Output {
  type: string;
  target?: any;
}

export default function checkType(input?: any): Output | void {
  if (isString(input)) {
    return {
      type: 'string',
      target: input
    };
  } else if (isNumber(input)) {
    return {
      type: 'number',
      target: input
    };
  } else if (isArray(input)) {
    return {
      type: 'array',
      target: input
    };
  } else if (isObject(input)) {
    return {
      type: 'object',
      target: input
    };
  } else if (isFunction(input)) {
    return {
      type: 'function',
      target: input
    };
  } else if (isNull(input)) {
    return {
      type: 'null',
      target: input
    };
  } else if (isUndefined(input)) {
    return {
      type: 'undefined',
      target: input
    };
  } else if (isBoolean(input)) {
    return {
      type: 'boolean',
      target: input
    };
  } else if (isRegExp(input)) {
    return {
      type: 'regexp',
      target: input
    };
  } else if (isError(input)) {
    return {
      type: 'error',
      target: input
    };
  } else if (isDate(input)) {
    return {
      type: 'date',
      target: input
    };
  } else if (isSymbol(input)) {
    return {
      type: 'symbol',
      target: input
    };
  }
}
