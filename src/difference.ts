/**
 * Retorna apenas os itens do array da esquerda (primeiro parâmetro) não presentes no array da direita (segundo parâmetro)
 *
 * > Importante: Os parâmetros não devem ter sua estrutura alterada.
 *
 * @param items array com itens de qualquer tipo.
 *
 * @returns somente os itens definidos.
 */
export const difference = (left: number[], right: number[]): number[] => {
  let result: number[] = [];
  let counter: number = 0;

  for (let i: number = 0; i < left.length; i++) {
    for (let j: number = 0; j < right.length; j++) {
      if (left[i] === right[j]) {
        counter++;
      }
    }
    if (counter === 0) {
      result.push(left[i]);
    }
    counter = 0;
  }
  return result;
};
