/**
 * Retorna um array de itens únicos e comuns entre os arrays da direita e da esquerda.
 *
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 *
 * @param items array com itens de qualquer tipo.
 *
 * @returns somente os itens definidos.
 */
export const intersection = (left: number[], right: number[]): number[] => {

  let result: number[] = [];
  let counter: number = 0;

  for (let i: number = 0; i < left.length; i++) {
    for (let j: number = 0; j < right.length; j++) {
      if (left[i] === right[j]) {
        counter++;
      }
    }
    if (counter != 0) {
      counter = 0;
      for (let k: number = 0; k < result.length; k++) {
        if (left[i] === result[k]) {
          counter++;
        }
      }
      if (counter === 0) {
        result.push(left[i]);
      }
    }
    counter = 0;
  }
  return result;
};