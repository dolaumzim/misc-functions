/**
 * Retorna um array com todos os elementos únicos de todos os arrays operados
 * pela união.
 *
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 *
 * @param items array com itens de qualquer tipo.
 *
 * @returns somente os itens definidos.
 */
export const union = <T>(...args: T[]): T[] => {
  let result: T[] = [];
  let argsAux: any = args;
  let counter: number = 0;
  let pushed: number = 0;

  for (let i: number = 0; i < args.length; i++) {
    for (let j: number = 0; j < argsAux[i].length; j++) {
      if (result.length === 0) {
        result.push(argsAux[i][j]);
        pushed++;
      }
      for (let k: number = 0; k < result.length; k++) {
        if (!pushed || !counter) {
          if (argsAux[i][j] === result[k]) {
            counter++;
          }
        }
      }
      if (counter === 0 && pushed === 0) {
        result.push(argsAux[i][j]);
        pushed++;
      }
      counter = pushed = 0;
    }
  }
  return result;
};
