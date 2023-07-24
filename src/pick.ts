import { Record } from '../types/record';

/**
 * Esta função mantem somente os campos de um objeto passado via parametro.
 *
 * > Importante: o objeto original não pode ser alterado.
 *
 * Ex.: pick({ a: 'lorem', b: 'ipsum', c: 'dolor'  }, 'a', 'b') === { a: 'lorem', b: 'ipsum' }
 *
 * @param record
 * @param args
 * @returns
 */
export const pick = <T extends Record>(
  record: T,
  ...args: (keyof T)[]
): Record => {
  let result: Record = {};
  let keys: unknown = Object.keys(record);
  let values: unknown = Object.values(record);

  for (let arg of args) {
    let auxArg: any = arg;
    for (let i: number = 0; i < Object.keys(record).length; i++) {
      if (auxArg === keys[i]) {
        result[keys[i]] = values[i];
      }
    }
  }
  return result;
};
