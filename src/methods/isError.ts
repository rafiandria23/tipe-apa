export default (input: any) => {
  return input instanceof Error && typeof input.message !== 'undefined';
};
