export const upperCaseFirst = (text: string): string => {
    text = text.replace(text[0], text[0].toUpperCase());
    return text;
  };
