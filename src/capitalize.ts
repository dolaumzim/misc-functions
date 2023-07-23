/**
 * Coloca a primeira letra do texto em maiúsculas, e o restante em minúsculas.
 *
 * @param word string em qualquer formato.
 * @returns o texto enviado por parâmetro, alterado para capitalize.
 */
export const capitalize = (text: string): string => {
  text = text.toLowerCase();
  text = text.replace(text[0], text[0].toUpperCase());
  return text;
};
