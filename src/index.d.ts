declare module 'tipe-apa' {
  export function isString(input: any): boolean;
  export function isNumber(input: any): boolean;
  export function isArray(input: any): boolean;
  export function isObject(input: any): boolean;
  export function isFunction(input: any): boolean;
  export function isNull(input: any): boolean;
  export function isUndefined(input: any): boolean;
  export function isBoolean(input: any): boolean;
  export function isRegExp(input: any): boolean;
  export function isError(input: any): boolean;
  export function isDate(input: any): boolean;
  export function isSymbol(input: any): boolean;
  export function checkType(input: any): boolean;
}
