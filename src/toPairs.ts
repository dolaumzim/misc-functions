import { KeyAndValue } from '../types/keyAndValue';
type Record = {
  [key: string]: string | number | symbol | boolean;
};

/**
 * Deve criar uma lista de arrays chave/valor a partir de um objeto
 *
 * Ex.: fromPairs({ a: 'a', b: 1, c: false }) === [['a', 'a'], ['b': 1], ['c': false]]
 *
 * @param args
 * @returns
 */
export const toPairs = (record: Record): KeyAndValue[] => {
  let result: any = [];
  let keys: unknown = Object.keys(record);
  let values: unknown = Object.values(record);

  for (let i: number = 0; i < Object.keys(record).length; i++) {
    result.push([keys[i], values[i]]);
  }
  return result;
};
