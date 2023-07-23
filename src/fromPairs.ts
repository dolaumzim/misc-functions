import { KeyAndValue } from '../types/keyAndValue';

/**
 * Deve criar um objeto a partir da lista de arrays chave/valor
 *
 * Ex.: fromPairs(['a', 'a'], ['b', 1], ['c', false]) === { a: 'a', b: 1, c: false }
 *
 * @param args
 * @returns
 */
export const fromPairs = (...args: KeyAndValue[]) => {
  let result: object = {};

  for (let i: number = 0; i < args.length; i++) {
    result[args[i][0]] = args[i][1];
  }
  return result;
};
