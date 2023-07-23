/**
 * Converts string to camel case (https://en.wikipedia.org/wiki/CamelCase)
 *
 * @param word string em qualquer formato.
 * @returns o texto enviado por parâmetro, alterado para camelCase.
 */
export const camelCase = (word: string): string => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ' ' || word[i] === '_' || word[i] === '-') {
      word = word.replace(word[i], '');
      word = word.replace(word[i], word[i].toUpperCase());
    }
  }
  return word;
};
