/**
 * Converte a string para pascal case (semelhante ao camel case, mas com a primeira letra maiuscula)
 *
 * @param word string em qualquer formato.
 * @returns o texto enviado por parâmetro, alterado para pascalCase.
 */
export const pascalCase = (word: string): string => {
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ' ' || word[i] === '_' || word[i] === '-') {
      word = word.replace(word[i], '');
      word = word.replace(word[i], word[i].toUpperCase());
    }
  }
  word = word.replace(word[0], word[0].toUpperCase());
  return word;
};
