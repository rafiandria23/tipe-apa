export default (input: any) => {
  return input && typeof input === 'object' && input.constructor === Array && Array.isArray(input);
};