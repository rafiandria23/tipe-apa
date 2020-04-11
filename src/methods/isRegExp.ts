export default (input: any) => {
  return input && typeof input === 'object' && input.constructor === RegExp;
};
