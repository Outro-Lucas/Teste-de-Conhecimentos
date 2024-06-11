# Teste de Conhecimentos em Angular/React, TypeScript, SQL e Node.js

## 1. TypeScript

### Perguntas Teóricas

1. Explique a diferença entre `interface` e `type` em TypeScript.

    **R:** De modo geral, uma `interface` é usada para definir a estrutura de objetos fixa, elas funcionam como contratos que especificam a forma de objetos e seu tipo. Portanto, as `interfaces` são a maneira adequada de definir a forma de vários objetos que estarão seguindo um padrão específico. Além disso, as interfaces podem ser estendidas e implementadas em classes.
    Por outro lado, os `types` possuem maior flexibilidade, possibilitando a criação de tipos complexos, interseções e uniões de tipos, tuplas e alias de tipos primitivos. Eles são adequados para definir combinações complexas e criar tipos personalizados que podem representar estruturas variadas, porém, não possuem a capacidade de mesclagem automática de declarações como as `interfaces`.

2. O que são generics e como eles são utilizados?
   
   **R:** São uma característica da linguagem que permite a criação de componentes que possam funcionar com uma variedade de tipos em vez de um único. Tipos genéricos podem ser bem utilizados em APIs, pois oferecem um jeito flexível, permitindo que os usuários usem seus próprios tipos sem interferir no código original. 

3. O que é um `Union Type` e como ele pode ser usado em TypeScript?

    **R:** Uma característica importante do TypeScript que permite declarar um valor que possui mais de um tipo. Das suas utilizações, é comum na criação de variáveis simples, parâmetros e retorno de funções, tipos de array e objetos.

### Desafios de Código

1. Escreva uma função em TypeScript que recebe uma lista de números e retorna o maior número da lista.
2. Crie uma interface `Person` com as propriedades `name` (string) e `age` (number). Escreva uma função que recebe um array de `Person` e retorna o nome da pessoa mais velha.

## 2. Angular/React

### Perguntas Teóricas

**Angular**

1. Explique a diferença entre `ngOnInit` e `constructor` em Angular.

    **R:** O `constructor` é um conceito padrão do TypeScript. Ele é uma função chamada para instanciar uma classe criada. No angular é comumente utilizado para a injeção de dependências. Não recomenda-se utilizá-lo para implementar lógicas de inicialização do componente. Para esta funcionalidade utilizamos o `ngOnInit`. `ngOnInit` é um método de ciclo de vida do angular. Ele é chamado após a construção do componente, assim que as propriedade de entrada são configuradas. Como dito anteriormente, nele pode-se iniciar a lógica do componente, como chamadas de serviços ou configuração inicial de variáveis.

2. O que são `Services` e `Dependency Injection` em Angular?

    **R:** `Services` no angular, são classes que possuem informações importantes como lógica de negócios e requisições ao servidor ou uma API externa. Sua utilidade se dá de tal forma que o código implementado nelas pode ser utilizado por todos os componentes da aplicação.
    Já `Dependency Injection` são serviços, funções, objetos ou até mesmo um valor específico que uma classe precisa para executar uma função. Com ela podemos utilizar as funções de um `Service` em determinado componente, bastando importá-la e instancia-lo no `constructor`.

3. Como funciona o `Data Binding` em Angular?
   
   **R:** `Data Binding` em um projeto angular, é definido como a comunicação entre view e a lógica, quando utilizamos a lógica do componente para atualizar o que aparece na view. Um caso simples é quando temos um variável declarada no *component.ts* e podemos exibi-la no *component.html* através de determinada expressão.

**React**

1. Explique a diferença entre `Component` e `PureComponent` em React.
2. O que são `Hooks` e por que eles são usados?
3. Como funciona o `State` e o `Props` em React?

### Desafios de Código

**Angular**

1. Crie um serviço simples em Angular que busca dados de uma API e injete-o em um componente.
2. Implemente um formulário reativo em Angular que coleta o nome e o email do usuário e exibe esses dados quando o formulário é submetido.

**React**

1. Crie um componente funcional em React que busca dados de uma API e exibe esses dados em uma lista.
2. Implemente um formulário controlado em React que coleta o nome e o email do usuário e exibe esses dados quando o formulário é submetido.

## 3. SQL

### Perguntas Teóricas

1. O que é uma `JOIN` e quais são os tipos principais de `JOIN` em SQL?

    **R:** Com `JOIN` pode-se combinar duas linhas ou mais de tabelas com base em uma condição relacionada entre elas.
    
    Os tipos de `JOIN` são: 
    
    **INNER JOIN:** Retorna apenas linhas que contém em ambas tabelas.

    **LEFT JOIN:** Retrona todas as linhas da tabela a esquerda e as linhas correspondentes da tabela a direita.


    **RIGHT JOIN:** Retorna todas as linhas da tabela a direita e as linhas correspondentes da tabela a esquerda.

    **FULL JOIN:** Retorna todas as linhas de duas tabelas, unificando os campos que houver correspondência.

1. Explique a diferença entre `WHERE` e `HAVING` em uma consulta SQL.
   
   **R:** A função deles é similar, realizar um filtro no banco de dados. O `HAVING` é comumente utilizado para filtrar os grupos resultantes com base em funções de agregação (COUNT, SUM, AVG, MIN E MAX). Já o `WHERE` funcionar direto na linha em questão, antes de qualquer operação de agrupamento.

2. O que são índices e por que são importantes?
   
   **R:** Os `índices` são estruturas que agilizam o processo de recuperação das linhas de um tabela. Neles podem conter chaves de uma ou mais colunas da tabela, permitindo assim um rápido acesso aos registros com base em valores específicos. 

### Desafios de Código

1. Escreva uma consulta SQL para encontrar todos os clientes que fizeram pedidos no último mês.
2. Dada a tabela `Employees` com colunas `id`, `name` e `salary`, escreva uma consulta SQL para encontrar os 5 funcionários com os maiores salários.

## 4. Node.js

### Perguntas Teóricas

1. O que é o `Event Loop` em Node.js e como ele funciona?
   
    **R:** `Event Loop` é um mecanismo que executa múltiplas operações assíncronas não interrompendo o fluxo principal da aplicação. Isso faz com que o Node.js seja eficiente em sistemas web que exigem um alto fluxo de entradas e saídas, como servidores de API, chats em tempo real e aplicações de streaming de dados.
    
2. Explique a diferença entre `require` e `import` em Node.js.

    **R:** `Require` é a maneira tradicional de importar módulos no `Node.js`, eles estão presentes somente em CommonJs. Já o `import` é um recurso moderno para importar módulos no JavaScript, trazido no ECMAScript 6 (ES6) garantindo benefícios como, uma sintaxe mais concisa, um escopo de importações controlado e importações assíncronas. Outra diferença está no fato do require retornar um objeto, enquanto o import retorna uma referência para o módulo. Isso faz com que o uso do require seja feito através da atribuição de uma variável que irá conceder a acesso as propriedade e métodos do módulo.

3. O que é `middleware` em Express.js e como ele é usado?
    
    **R:** `Middleware` é uma função que tem acesso aos objetos request e response. Com ele pode-se executar alguma lógica para alterar os objetos de requisição e resposta, encerrar a requisição ou chamar o próximo middleware na cadeia. Ele é comumente utilizado na execução de tarefas comuns como autenticação, validação de dados, registro de solicitações, entre outras. Possui um papel essencial na modularização das rotas e na extensibilidade de aplicativos `Express.js`.

### Desafios de Código

1. Crie uma API simples em Node.js usando Express que tem uma rota GET que retorna "Hello, World!".
2. Implemente um middleware em Express que registra todas as requisições recebidas com o método HTTP e a URL solicitada.
