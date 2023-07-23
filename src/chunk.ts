/**
 * Cria um array de grupos de elementos divididos em tamanho máximo igual ao parâmetro tamanho. O último elemento deste
 * novo array deverá conter o restante dos itens, caso a divisão não seja perfeitamente correta.
 *
 * > Importante: O parâmetro "valores" não deve ter sua estrutura alterada.
 *
 * ex.: chunk([1, 2, 3, 4, 5], 2) === [[1, 2], [3, 4], [5]]
 *
 * @param valores array de números que deverão ser quebrados em grupos.
 * @param tamanho numero que representa o tamanho máximo de cada grupo.
 * @returns
 */
export const chunk = (valores: number[], tamanho: number): number[][] => {
  let chunkAux: number[] = [];

  for (let i = 0; i < valores.length; i++) {
    chunkAux.push(valores[i]);
  }

  let spliceAux: number[] = chunkAux;
  let resultado: number[][] = [];

  while (chunkAux.length != 0) {
    chunkAux = spliceAux.splice(tamanho);
    resultado.push(spliceAux);
    spliceAux = chunkAux;
  }
  return resultado;
};
