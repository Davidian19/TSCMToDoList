<<<<<<< HEAD
# TSCMToDoList

TSCMToDoList é uma aplicação responsiva de ToDo List onde é possível adicionar e finalizar as tarefas, que possui um contador das atividades finalizadas que é armazenado numa api criada em javaScript.  Além disso possui um consumo da Chuck Norris Jokes Api, que atualiza a cada 5 segundos.

## Tecnologias, ferramentas e dependências

- React
- TypeScript
- JavaScript
- Styled-Components
- Axios
- React-query
- Express
- Cors

## Para começar

Primeiro você precisa instalar as dependências com o comando:
- `yarn`

Depois você precisa rodar a aplicação com o comando:
- `yarn dev`

Para finalizar, você irá rodar o servidor indo até o diretório "Api" dentro de "Pages" (tscom\tscm\src\Pages\Api), com o comando:
- `node api.js`

## Informações Técnicas

*Main.tsx:*

Aqui é responsável por renderizar o 'APP' e aqui possi o componente:
- `<QueryClientProvider>`:Responsável pelo contexto de gestão de estado
- `<QueryClient`:Um objeto serve como um repositório de dados 

*App.tsx:*

Usado para renderizar os componentes da ToDo List

*ToDoList.tsx:*

Responsável para gerenciar a lista de tarefas, adicionar novas tarefas e excluir tarefas existentes. Também faz chamadas para API para obter, adicionar e excluir tarefas, além de renderizar a interface do usuário com a lista de tarefas, contador e formulário de adição de tarefas.
Aqui utilizamos Axios para fazer o get, post e delete das atividades na api criada, também utilizamos useEffect para manter a lista atualizada sempre que adicionamos uma tarefa nova e os useStates para obter as informações do formulário.

*Header.tsx:*

Usado pra renderizar o cabeçalho da aplicação

*Counter.tsx:*

Responsável para renderizar o a quantidade de tarefas concluídas:

*ChuckNorrisJoke.tsx:*

Usado para consumir a api Chuck Norris Jokes Api, buscar e exibir uma piada aleatória do Chuck Norris, atualizando a cada 5 segundos.

*AddTask.tsx*

Responsável palo formulário para implementação de uma nova tarefa, que recebe props para receber as informações e funções necessárias.

*Api.js:*

API simples em Node.js utilizando o framework Express para o armazenamento de tarefas 
- `/gettask` (GET): Retorna a lista de tarefas atualizada
- `/addtask` (POST): Adiciona uma nova tarefa à lista
- `/deletetask/:id` (DELETE): Exclui a tarefa com o ID especificado
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
>>>>>>> develop
