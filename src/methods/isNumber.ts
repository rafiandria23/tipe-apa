export default (input: any) => {
  return typeof input === 'number' || isFinite(input);
};
