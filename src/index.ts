export function isArray(input: any): input is Array<(typeof input)[number]> {
  return (
    input &&
    typeof input === 'object' &&
    input.constructor === Array &&
    Array.isArray(input)
  );
}

export function isBoolean(input: any): input is boolean {
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

export function isNumber(input: any): input is number {
  return typeof input === 'number' || input instanceof Number;
}

export function isObject(input: any): input is Object {
  return input && typeof input === 'object' && input.constructor === Object;
}

export function isRegExp(input: any): input is RegExp {
  return input && typeof input === 'object' && input.constructor === RegExp;
}

export function isString(input: any): input is string {
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
  }

  if (isNumber(input)) {
    return {
      type: 'number',
      target: input,
    };
  }

  if (isArray(input)) {
    return {
      type: 'array',
      target: input,
    };
  }

  if (isObject(input)) {
    return {
      type: 'object',
      target: input,
    };
  }

  if (isFunction(input)) {
    return {
      type: 'function',
      target: input,
    };
  }

  if (isNull(input)) {
    return {
      type: 'null',
      target: input,
    };
  }

  if (isUndefined(input)) {
    return {
      type: 'undefined',
      target: input,
    };
  }

  if (isBoolean(input)) {
    return {
      type: 'boolean',
      target: input,
    };
  }

  if (isRegExp(input)) {
    return {
      type: 'regexp',
      target: input,
    };
  }

  if (isError(input)) {
    return {
      type: 'error',
      target: input,
    };
  }

  if (isDate(input)) {
    return {
      type: 'date',
      target: input,
    };
  }

  if (isSymbol(input)) {
    return {
      type: 'symbol',
      target: input,
    };
  }
}

export default checkType;
