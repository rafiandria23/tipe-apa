export default (input: any) => {
  return typeof input === 'string' || input instanceof String;
};
