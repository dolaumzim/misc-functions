export const lowerCaseFirst = (text: string): string => {
  text = text.replace(text[0], text[0].toLowerCase());
  return text;
};
