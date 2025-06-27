import { v4 as uuidv4 } from "uuid";

export let getDataQuestionsReact = [
  {
    id: uuidv4(),
    question: "O que é JSX em React?",
    options: [
      "Uma nova linguagem de programação criada pela Facebook",
      "Uma sintaxe que permite escrever HTML dentro de JavaScript",
      "Um framework CSS para estilizar componentes",
      "Um substituto ao DOM virtual",
    ],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question:
      "Qual hook do React você deve usar para executar efeitos colaterais (como chamadas a APIs) após a renderização de um componente?",
    options: ["useState", "useMemo", "useEffect", "useCallback"],
    correctAnswer: 2,
  },
  {
    id: uuidv4(),
    question:
      "No contexto do React Fiber, qual é a principal vantagem do reconciliation incremental (“time slicing”)?",
    options: [
      "Permitir múltiplos roots em uma mesma árvore de componentes",
      "Dividir o trabalho de renderização em pedaços, evitando bloqueios da UI",
      "Substituir completamente o uso do Virtual DOM",
      "Automatizar otimizações de bundle no build",
    ],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question: "Como você declara um componente funcional em React?",
    options: [
      "class MyComponent extends React.Component {}",
      "function MyComponent() { return <div />; }",
      "<MyComponent></MyComponent>",
      "React.createComponent('MyComponent')",
    ],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question:
      "Em React Router, qual componente você utiliza para definir rotas dentro da sua aplicação?",
    options: [
      "<Route>",
      "<Switch> (v5) / <Routes> (v6)",
      "<Link>",
      "<Redirect>",
    ],
    correctAnswer: 0,
  },
  {
    id: uuidv4(),
    question:
      "Qual das seguintes afirmações sobre hooks personalizados (“custom hooks”) é verdadeira?",
    options: [
      "Precisam obrigatoriamente usar useReducer internamente",
      "Devem sempre iniciar seus nomes com “use” para que as regras de hooks funcionem",
      "Não podem chamar outros hooks dentro deles",
      "Precisam ser definidos dentro do corpo de um componente",
    ],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question:
      "Para que serve a propriedade key ao renderizar uma lista de elementos em React?",
    options: [
      "Definir a largura do elemento na tela",
      "Identificar unicamente cada elemento, ajudando o algoritmo de reconciliação",
      "Adicionar estilos CSS inline",
      "Fazer o componente virar controlado",
    ],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question:
      "Qual hook você pode usar para memorizar um valor computado e evitar recomputações desnecessárias?",
    options: ["useCallback", "useMemo", "useLayoutEffect", "useTransition"],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question:
      "Em Error Boundaries, qual método você implementa para capturar erros em componentes-filho e renderizar uma UI alternativa?",
    options: [
      "static getDerivedStateFromError()",
      "componentDidCatch()",
      "Ambas A e B",
      "getSnapshotBeforeUpdate()",
    ],
    correctAnswer: 2,
  },
  {
    id: uuidv4(),
    question:
      "Qual comando cria uma nova aplicação React usando o Create React App?",
    options: [
      "npm init react-app my-app",
      "npx create-react-app my-app",
      "yarn react new my-app",
      "npm install react-app my-app",
    ],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question: "O que o hook useRef retorna?",
    options: [
      "Um array contendo dois valores: estado e função de atualização",
      "Um objeto mutável cuja propriedade .current persiste entre renderizações",
      "Uma referência ao nó real do DOM que será montado",
      "Uma Promise que resolve após a próxima renderização",
    ],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question:
      "Sobre React Suspense e carregamento dinâmico de componentes, assinale a alternativa correta:",
    options: [
      "Suspense só funciona para dados, não para componentes",
      "Suspense é usado para interromper a renderização até que todos os dados sejam carregados",
      "É possível usar React.lazy() com Suspense para carregar componentes sob demanda",
      "Suspense substitui a necessidade de Error Boundaries",
    ],
    correctAnswer: 2,
  },
  {
    id: uuidv4(),
    question: "Qual é a diferença entre props e state em React?",
    options: [
      "Props são mutáveis; state é imutável",
      "Props são passadas pelo componente pai; state é gerenciado internamente pelo próprio componente",
      "Props são somente para componentes funcionais; state somente para classes",
      "Não há diferença significativa",
    ],
    correctAnswer: 1,
  },
  {
    id: uuidv4(),
    question: "Em que cenário você usaria o hook useContext?",
    options: [
      "Para evitar o uso de prop drilling e compartilhar dados em múltiplos componentes distantes",
      "Para controlar o ciclo de vida de um componente de classe",
      "Para gerenciar formulários complexos",
      "Para otimizar o carregamento de imagens",
    ],
    correctAnswer: 0,
  },
  {
    id: uuidv4(),
    question: "Qual regra abaixo NÃO faz parte das Regras dos Hooks do React?",
    options: [
      "Hooks só podem ser chamados no nível superior de um componente ou hook personalizado",
      "Hooks só podem ser chamados em componentes de função ou em hooks personalizados",
      "Hooks podem ser chamados condicionalmente, desde que a condição seja a mesma em todas as renderizações",
      "Não se deve chamar hooks dentro de loops, condições ou funções aninhadas",
    ],
    correctAnswer: 2,
  },
];
