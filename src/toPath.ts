/**
 * Transforma uma string no formato de dot notation
 * (https://docs.mongodb.com/manual/core/document/#dot-notation) em um array
 * de posições de um objeto ou array.
 *
 * ex.: toPath('campo1.campo2[0].campo3')
 *
 * é igual a
 *
 * ['campo1', 'campo2', '0', 'campo3']
 *
 * @param path
 * @returns
 */
export const toPath = (path: string): string[] => {
  let result: string[] = [];

  path = path.replace(/[\[]/g, '.');
  path = path.replace(/[\]]/g, '');
  result = path.split('.');
  return result;
};
