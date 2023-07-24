/**
 * Retorna um array com todos os elementos únicos.
 *
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 *
 * @param items array com itens de qualquer tipo.
 *
 * @returns somente os itens definidos.
 */
export const uniq = <T>(args: T[]): T[] => {
  let result: T[] = [];
  let argsAux: any = args;
  let counter: number = 0;
  let pushed: number = 0;

  for (let i: number = 0; i < args.length; i++) {
    if (result.length === 0) {
      result.push(argsAux[i]);
      pushed++;
    }
    for (let j: number = 0; j < result.length; j++) {
      if (!pushed || !counter) {
        if (argsAux[i] === result[j]) {
          counter++;
        }
      }
    }
    if (counter === 0 && pushed === 0) {
      result.push(argsAux[i]);
      pushed++;
    }
    counter = pushed = 0;
  }
  return result;
};
