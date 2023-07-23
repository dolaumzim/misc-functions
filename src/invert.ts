import { Record } from '../types/record';

/**
 * Inverte as posições das chaves e dos valores de um objeto.
 *
 * ex.:
 * invert({ 'a': 1, 'b': 2, 'c': 1 }) === { '1': 'c', '2': 'b' };
 *
 * @param record
 * @returns
 */
export const invert = (record: Record): Record => {
  let result: Record = {};
  let keys: unknown = Object.keys(record);
  let values: unknown = Object.values(record);

  for (let i: number = 0; i < Object.keys(record).length; i++) {
    result[values[i]] = keys[i];
  }
  return result;
};
