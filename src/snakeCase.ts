/**
 * Converts string to camel case (https://en.wikipedia.org/wiki/Snake_case)
 *
 * @param word string em qualquer formato.
 * @returns o texto enviado por parâmetro, alterado para snakeCase.
 */
export const snakeCase = (word: string): string => {
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ' ' || word[i] === '_' || word[i] === '-') {
      word = word.replace(word[i], '_');
    }
  }
  return word;
};
