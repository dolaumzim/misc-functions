import { Record } from '../types/record';

/**
 * Esta função remove os campos de um objeto passado via parametro.
 *
 * > Importante: o objeto original não pode ser alterado.
 *
 * Ex.: omit({ a: 'lorem', b: 'ipsum', c: 'dolor'  }, 'a', 'b') === { c: 'dolor' }
 *
 * @param record
 * @param args
 * @returns
 */
export const omit = <T extends Record>(
  record: T,
  ...args: (keyof T)[]
): Record => {
  let result: Record = {};
  let keys: unknown = Object.keys(record);
  let values: unknown = Object.values(record);

  for (let i: number = 0; i < Object.keys(record).length; i++) {
    result[keys[i]] = values[i];
  }
  for (let arg of args) {
    let auxArg: any = arg;
    delete result[auxArg];
  }
  return result;
};
