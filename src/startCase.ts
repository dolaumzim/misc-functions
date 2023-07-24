/**
 * Converts string to start case (https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage)
 *
 * @param word string em qualquer formato.
 * @returns o texto enviado por parâmetro, alterado para startCase.
 */
export const startCase = (word: string): string => {
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ' ' || word[i] === '_' || word[i] === '-') {
      word = word.replace(word[i], ' ');
      word = word.replace(word[i + 1], word[i + 1].toUpperCase());
    }
  }
  word = word.replace(word[0], word[0].toUpperCase());
  return word;
};
