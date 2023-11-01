# Funções Básicas Typescript - Armando Assini

Este projeto se trata de uma série de funções básicas, a serem desenvolvidas com algumas limitações propostas, que serão citadas posteriormente, com intuito de serem funcionais em qualquer ocasião e ainda passarem nos testes propostos neste repositório.

## Instalação

Todas as bibliotecas necessárias para esta prática já estão adicionadas ao projeto. Desta forma, para iniciar o projeto, basta executar o comando abaixo, estando na pasta raiz deste repositório:

```sh
npm install
```

## Comandos

Este projeto nasce com alguns comandos úteis para o desenvolvedor. Abaixo, uma breve descrição deles:

- `build`: comando responsável por transformar o código typescript em javascript, compreensível para o interpretador de node. A princípio, este comando será necessário apenas para o momento da publicação de nosso pacote.
- `test`: comando utilizado para rodar os testes uma vez apenas. Util também para o momento de publicação deste pacote. 
- `test:watch`: comando utilizado para rodar os testes, de forma que a cada vez que seu código for alterado, ele será executado novamente, avaliando assim, a cada mudança, se sua solução está correta.
- `lint`: comando utilizado para avaliar se seu código está seguindo as boas práticas de desenvolvimento. Sugiro que você execute este comando sempre, antes de entregar sua solução. Ele vai garantir que você está fazendo um bom trabalho em qualidade do código entregue.
- `format`: este comando te ajudará garantir que as regras de formatação de código estão sendo seguidas. Rode ele para que todo seu código seja varrido e corrigido automaticamente.

Para executar qualquer um destes comandos, basta você executar, no terminal, o comando `npm run <nome-do-comando>`. Para executar o comando de build, por exemplo, você precisa executar um `npm run build`

## Estrutura do repositório

Este repositório possui dois diretórios principais: 
- `src`: pasta onde todas as funções deverão estar implementadas
- `test`: pasta onde se localizam os testes de unidade das funções.

## Sobre o projeto

Foi fornecido um repositório contento uma série de arquivos, cada um com o nome de uma função. Dentro de cada um desses arquivos se encontrava uma breve descrição do funcionamento esperado da dada função. Além disso, também foram fornecidos arquivos de teste individuais, de tal forma que cada função poderia ser testada individualmente.

A partir dessas descrições, foram desenvolvidos códigos assegurando o funcionamento de cada uma delas e consequentemente garantindo a resposta correta nos testes propostos.

Para aplicar um teste é necessário utilizar um comando como o seguinte exemplo: Implementada a função do método `camelCase`, disponível em `src/cammelCase.ts`, para rodar os testes disponíveis em `test/camelCase.test.ts` utilize o comando:

```bash
npm run test:watch -- test/camelCase.test.ts
```

Este comando habilita o modo de execução contínua dos testes, e executa apenas os testes da função `camelCase`. Os métodos foram considerados prontos no momento que todos os testes foram executados com sucesso.

Para executar o teste de todas as funções basta utilizar o comando test sem nenhum argumento:

```bash
npm run test
```

Ainda é importante denotar que para esta prática foi vetado o uso de métodos como : forEach, filter, map, reduce, includes, some, every e afins, para focar na utilização e compreensão dos loops básicos.

## Conclusão

Ao final do projeto, foram desenvolvidas todas as funções propostas, passando em todos os testes propostos.
  
![Passed Tests](https://github.com/dolaumzim/misc-functions/assets/66185784/b6f1262e-0922-4649-aea8-66e9c9596469)

## Autor

  - **Armando Assini** - *arm.assini@gmail.com*

**Contribuições** - Professores, Monitores e Colegas de classe Turma React2 - Raro Academy.

