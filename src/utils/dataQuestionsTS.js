import { v4 as uuidv4 } from "uuid";

let getDataQuestionTS = [
  {
    id: uuidv4(),
    question: "Qual o principal benefício do TypeScript sobre o JavaScript?",
    options: [
      "Suporte a múltiplos paradigmas de programação",
      "Tipagem estática opcional e checagem em tempo de compilação",
      "Melhor desempenho de execução",
      "Integração direta com bancos de dados",
    ],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question: "Quando usar 'type' ou 'interface' no TypeScript?",
    options: [
      "Usa-se 'type' apenas para funções",
      "Usa-se 'interface' apenas para classes",
      "Ambas A e B estão incorretas",
      "Ambas podem ser usadas para definir estruturas de objetos",
    ],
    correctAnswer: 3,
  },
  {
    id: uuidv4(),
    question: "O que faz o operador & em tipos TypeScript?",
    options: [
      "Cria um tipo exclusivo entre dois tipos",
      "Cria um tipo que herda propriedades de ambos os tipos",
      "Realiza uma operação bit a bit",
      "Indica um tipo opcional",
    ],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question:
      "Qual declaração abaixo é a forma correta de inferência de tipo com const?",
    options: [
      "let idade: number = 30;",
      "var nome = 'João';",
      "const idade = 30;",
      "let valor: any = 'abc';",
    ],
    correctAnswer: 2,
  },
  {
    id: uuidv4(),
    question: "Para que serve o operador 'as' no TypeScript?",
    options: [
      "Para definir herança entre interfaces",
      "Para efetuar um type assertion (afirmação de tipo)",
      "Para criar enums personalizados",
      "Para importar tipos de bibliotecas externas",
    ],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question: "Como declarar uma função genérica em TypeScript?",
    options: [
      "function inverter(arr: any[]): any[];",
      "function inverter<T>(arr: T[]): T[];",
      "function inverter(arr: unknown[]): unknown[];",
      "function inverter(arr): arr[];",
    ],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question: "Qual é a forma correta de declarar um enum em TypeScript?",
    options: [
      "enum = { red, green, blue };",
      "enum Cores [Vermelho, Verde, Azul];",
      "enum Cores { Vermelho, Verde, Azul }",
      "const enum = Cores { ... }",
    ],
    correctAnswer: 2,
  },
  {
    id: uuidv4(),
    question:
      "Qual utilitário embutido no TypeScript torna todas as propriedades de um tipo somente leitura?",
    options: ["Partial<T>", "Readonly<T>", "Immutable<T>", "Const<T>"],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question: "O que faz o tipo 'Required<T>' no TypeScript?",
    options: [
      "Torna todas as propriedades opcionais",
      "Torna todas as propriedades obrigatórias",
      "Remove propriedades que não são primitivos",
      "Força as propriedades a aceitarem null",
    ],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question: "Como declarar uma tupla em TypeScript?",
    options: [
      "let pessoa = [string, number];",
      "let pessoa: [string, number];",
      "let pessoa = (string, number);",
      "let pessoa: {string, number};",
    ],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question: "Como tornar um atributo privado em uma classe TypeScript?",
    options: [
      "Colocando o caractere _ antes do nome da propriedade",
      "Declarando-a com private senha: string;",
      "Usando o modificador readonly",
      "Exportando como default",
    ],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question: "O que são decorators em TypeScript?",
    options: [
      "Anotações que são ignoradas em tempo de compilação",
      "São executados em tempo de execução, modificando a classe/metadados",
      "Funções auxiliares chamadas pelo compilador",
      "Um novo tipo de hook de ciclo de vida",
    ],
    correctAnswer: 1,
  },
];

export default getDataQuestionTS;
