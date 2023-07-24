import { Record } from '../types/record';

/**
 * Retorna um array com todos os elementos únicos, diferenciados entre si por um atributo, identificado pelo segundo
 * parametro.
 *
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 * > Importante: Caso dois objetos diferentes estejam presentes na lista, mas com o identificador igual,
 * prevalece o primeiro item encontrado.
 *
 * Ex.: uniqBy([{a: 1, b: 2}, {a: 1, b: 1}, {a: 2, b: 2}], 'a')
 *
 * é igual
 *
 * [{a: 1, b: 2}, {a: 2, b: 2}]
 *
 * @param items array com itens de qualquer tipo.
 *
 * @returns somente os itens definidos.
 */
export const uniqBy = <T extends Record>(args: T[], key: keyof T): T[] => {
  let result: T[] = [];
  let argsAux: any = args;
  let counter: number = 0;
  let pushed: number = 0;

  for (let i: number = 0; i < args.length; i++) {
    if (result.length === 0 && argsAux[i].hasOwnProperty(key.toString())) {
      result.push(argsAux[i]);
      pushed++;
    }
    if (argsAux[i].hasOwnProperty(key.toString())) {
      for (let j: number = 0; j < result.length; j++) {
        if (result[j][key.toString()] === argsAux[i][key.toString()]) {
          counter++;
        }
      }
      if (counter === 0 && pushed === 0) {
        result.push(argsAux[i]);
        pushed++;
      }
    }
    counter = pushed = 0;
  }
  return result;
};
