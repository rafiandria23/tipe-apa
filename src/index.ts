import moduleAlias from 'module-alias';

moduleAlias.addAlias('@', __dirname);

export * from '@/methods';
export { default as checkType } from '@/checkType';
