import { trocaValores } from '../src/exercicio-3';

describe('exercicio 3', () => {
  it('se o 1o parametro for o maior, ele será retornado no campo "maior"', () => {
    // construcao do problema.
    let primeiro = 15;
    let segundo = 10;

    // execucao da solução.
    // sut -> system under test.
    const r = trocaValores(primeiro, segundo);
    console.log(r);

    // validacao da solução.
    // expect(maior).toEqual(primeiro);
    // expect(menor).toEqual(segundo);
  });

  it('se o 1o parametro for o menor, ele será retornado no campo "menor"', () => {
    // construcao do problema.
    let primeiro = 5;
    let segundo = 10;

    // execucao da solução.
    // sut -> system under test.
    // [valorMaior, valorMenor] = trocaValores(valorMenor, valorMaior);
    const { menor, maior } = trocaValores(primeiro, segundo);

    // validacao da solução.
    expect(maior).toEqual(segundo);
    expect(menor).toEqual(primeiro);
  });

  it('se os valores forem iguais, o primeiro pode ser entendido como o menor', () => {
    // construcao do problema.
    let primeiro = 10;
    let segundo = 10;

    // execucao da solução.
    // sut -> system under test.
    // [valorMaior, valorMenor] = trocaValores(valorMenor, valorMaior);
    const { menor, maior } = trocaValores(primeiro, segundo);

    // validacao da solução.
    expect(maior).toEqual(segundo);
    expect(menor).toEqual(primeiro);
  });
});
