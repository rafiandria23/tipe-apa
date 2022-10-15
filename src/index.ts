export function isArray(input: any): input is Array<typeof input[number]> {
  return (
    input &&
    typeof input === 'object' &&
    input.constructor === Array &&
    Array.isArray(input)
  );
}

export function isBoolean(input: any): input is Boolean {
  return typeof input === 'boolean';
}

export function isDate(input: any): input is Date {
  return input instanceof Date;
}

export function isError(input: any): input is Error {
  return input instanceof Error && typeof input.message !== 'undefined';
}

export function isFunction(input: any): input is Function {
  return typeof input === 'function';
}

export function isNull(input: any): input is null {
  return input === null;
}

export function isNumber(input: any): input is Number {
  return typeof input === 'number' || input instanceof Number;
}

export function isObject(input: any): input is Object {
  return input && typeof input === 'object' && input.constructor === Object;
}

export function isRegExp(input: any): input is RegExp {
  return input && typeof input === 'object' && input.constructor === RegExp;
}

export function isString(input: any): input is String {
  return typeof input === 'string' || input instanceof String;
}

export function isSymbol(input: any): input is Symbol {
  return typeof input === 'symbol';
}

export function isUndefined(input: any): input is undefined {
  return typeof input === 'undefined';
}

export type CheckTypeOutput = {
  type: string;
  target: any;
};

export function checkType(input: any): CheckTypeOutput {
  if (isString(input)) {
    return {
      type: 'string',
      target: input,
    };
  } else if (isNumber(input)) {
    return {
      type: 'number',
      target: input,
    };
  } else if (isArray(input)) {
    return {
      type: 'array',
      target: input,
    };
  } else if (isObject(input)) {
    return {
      type: 'object',
      target: input,
    };
  } else if (isFunction(input)) {
    return {
      type: 'function',
      target: input,
    };
  } else if (isNull(input)) {
    return {
      type: 'null',
      target: input,
    };
  } else if (isUndefined(input)) {
    return {
      type: 'undefined',
      target: input,
    };
  } else if (isBoolean(input)) {
    return {
      type: 'boolean',
      target: input,
    };
  } else if (isRegExp(input)) {
    return {
      type: 'regexp',
      target: input,
    };
  } else if (isError(input)) {
    return {
      type: 'error',
      target: input,
    };
  } else if (isDate(input)) {
    return {
      type: 'date',
      target: input,
    };
  } else if (isSymbol(input)) {
    return {
      type: 'symbol',
      target: input,
    };
  }
}

export default checkType;
