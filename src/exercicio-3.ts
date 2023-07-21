type ResultanteTrocaValores = {
  maior: number;
  menor: number;
};

function trocaValores(
  primeiro: number, // 5.
  segundo: number, // 10.
): ResultanteTrocaValores {
  if (primeiro < segundo) {
    return {
      menor: primeiro,
      maior: segundo,
    };
  }

  return {
    menor: segundo,
    maior: primeiro,
  };
}

export { trocaValores };
