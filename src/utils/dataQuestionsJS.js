import { v4 as uuidv4 } from "uuid";

let getDataQuestionJS = [
  {
    id: uuidv4(),
    question:
      "Qual a forma correta de declarar uma variável cujo valor não será reatribuído?",
    options: [
      "var x = 10;",
      "let x = 10;",
      "const x = 10;",
      "immutable x = 10;",
    ],
    correctAnswer: 2,
  },
  {
    id: uuidv4(),
    question: "O que faz o método Array.prototype.map()?",
    options: [
      "Modifica o array original aplicando uma função a cada elemento",
      "Cria e retorna um novo array, aplicando uma função a cada elemento",
      "Remove todos os elementos de um array",
      "Executa uma função somente no primeiro elemento do array",
    ],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question:
      "Qual o operador usado para verificar igualdade de valor e tipo em JavaScript?",
    options: ["==", "=", "===", "!="],
    correctAnswer: 2,
  },
  {
    id: uuidv4(),
    question: "Em JavaScript, qual é o valor de typeof NaN?",
    options: ['"number"', '"NaN"', '"undefined"', '"object"'],
    correctAnswer: 0,
  },
  {
    id: uuidv4(),
    question:
      "Sobre o event loop do JavaScript, qual fila de tarefas (queues) tem prioridade mais alta?",
    options: [
      "Fila de Macrotasks (e.g. setTimeout)",
      "Fila de Microtasks (e.g. Promises)",
      "Fila de Renderização do Browser",
      "Fila de Tasks do Web Worker",
    ],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question: 'Qual é a saída de console.log(1 + "2" + 3);',
    options: ["6", '"123"', "NaN", '"33"'],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question: "O que faz a sintaxe de spread ... em const arr2 = [...arr1];",
    options: [
      "Concatena arr1 com outro array vazio",
      "Cria uma cópia rasa (shallow copy) de arr1",
      "Converte arr1 em um objeto",
      "Remove elementos duplicados de arr1",
    ],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question:
      "Em qual caso uma função geradora (function*) retorna valores via yield*?",
    options: [
      "Delega iteração a outro gerador ou iterável",
      "Encerra imediatamente o gerador chamador",
      "Retorna um array de valores imediatamente",
      "Inicia uma nova Promise dentro do gerador",
    ],
    correctAnswer: 0,
  },
  {
    id: uuidv4(),
    question: "Como você transforma uma string em um número inteiro?",
    options: [
      'Number.parseInt("42")',
      '"42".toInteger()',
      'int("42")',
      '"+42"',
    ],
    correctAnswer: 0,
  },
  {
    id: uuidv4(),
    question:
      "Qual dos seguintes métodos converte uma Promise em uma cadeia de tratamento de erros?",
    options: [".then()", ".catch()", ".finally()", ".resolve()"],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question:
      "Sobre herança prototípica, como você cria um objeto que herda de objPai sem chamar seu construtor?",
    options: [
      "const filho = Object.create(objPai);",
      "const filho = new objPai();",
      "const filho = Object.assign({}, objPai);",
      "const filho = {...objPai};",
    ],
    correctAnswer: 0,
  },
  {
    id: uuidv4(),
    question:
      "Qual palavra-chave define uma função de seta (arrow function) em ES6?",
    options: ["func", "=>", "->", "arrow"],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question:
      "Em qual cenário o this dentro de um método aponta para undefined em modo strict?",
    options: [
      "Quando a função é chamada como método de um objeto",
      "Quando a função é chamada sem contexto (func() pura)",
      "Quando a função é definida como arrow function",
      "Quando se usa bind() para setar o contexto",
    ],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question:
      "Qual a diferença principal entre call() e apply() ao invocar uma função?",
    options: [
      "call() aceita um array de argumentos; apply() aceita lista separada por vírgula",
      "call() aceita lista de argumentos; apply() aceita um array de argumentos",
      "Ambos funcionam da mesma forma sem diferença",
      "call() retorna uma Promise; apply() não",
    ],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question:
      "Qual método verifica se todos os elementos de um array satisfazem uma condição?",
    options: ["filter()", "every()", "some()", "reduce()"],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question:
      "Qual recurso do ES6 permite importar somente partes específicas de um módulo?",
    options: [
      "require()",
      "import * as",
      "import { funçãoX } from 'modulo'",
      "module.exports",
    ],
    correctAnswer: 2,
  },
];

export default getDataQuestionJS;
