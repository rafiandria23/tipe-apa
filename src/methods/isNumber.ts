export default (input: any) => {
  return typeof input === 'number' || input instanceof Number;
};
