
/*

Estudo sobre funções em JavaScript

Funções são blocos de construção fundamentais em JavaScript. 
Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. 
Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

Tipos de funções em javascript

1. Funções declarativas
    De exemplos de funções declarativas:
    function funcao() {
        return "Hello World!";
    }
    function soma(a, b) {
        return a + b;
    }

    OBS: Funções declarativas são carregadas antes do código ser interpretado pelo JavaScript.
    Em qual situação seria melhor usar uma função declarativa ao invés de uma função expressão?
    Quando você quer que a função seja carregada antes do código ser interpretado pelo JavaScript.
    ----------------------------------------------------------
    
2. Funções expressões
    De exemplos de funções expressões:
    var funcao = function() {
        return "Hello World!";
    }
    var soma = function(a, b) {
        return a + b;
    }

    OBS: Funções expressões são carregadas apenas quando o interpretador chega na linha de código onde a função foi definida.
    Em qual situação seria melhor usar uma função expressão ao invés de uma função declarativa?
    Quando você quer que a função seja carregada apenas quando o interpretador chegar na linha de código onde a função foi definida.
    QUais são os benefícios de usar uma função expressão nesse caso de esperar  que ela seje executada somente quando o interpretador chegar nela?
    Você pode ter uma função que depende de outra função que ainda não foi carregada pelo interpretador.
    ----------------------------------------------------------
    
3. Funções construtoras
    De exemplos de funções construtoras:
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    var pessoa = new Pessoa("Luiz", 62);
    console.log(pessoa.nome); // Luiz
    console.log(pessoa.idade); // 62

    OBS: Funções construtoras são usadas para criar novos objetos com as propriedades e métodos definidos na função.
    Qual é a diferença entre uma função construtora e uma função declarativa?
    Uma função declarativa não cria um novo objeto, ela apenas executa uma tarefa.
    Em que situação seria melhor usar uma função construtora ao invés de uma função declarativa?
    Quando você quer criar um novo objeto com as propriedades e métodos definidos na função.  
    ----------------------------------------------------------  

4. Arrow functions
    Exemplo de arrow function:
    var funcao = () => {
        return "Hello World!";
    }

    OBS: Arrow functions são funções anônimas que podem ser escritas de forma mais curta.
    Qual é a diferença entre uma arrow function e uma função expressão?
    Uma arrow function é uma função expressão escrita de forma mais curta.
    Em que situação seria melhor usar uma arrow function ao invés de uma função expressão?
    Quando você quer escrever uma função expressão de forma mais curta.
    ----------------------------------------------------------
    
5. Funções auto invocadas
    Exemplo de função auto invocada:
    (function() {
        console.log("Hello World!");
    })();
    (function(a, b) {
        console.log(a + b);
    })(2, 3);
    Exemplo de função auto invocada com retorno e 5 argumentos:
    var soma = (function(a, b, c, d, e) {
        return a + b + c + d + e;
    })(1, 2, 3, 4, 5);

    OBS: Funções auto invocadas são funções que são executadas assim que você as cria.
    Qual é a diferença entre uma função auto invocada e uma função declarativa?
    Uma função auto invocada é uma função declarativa que é executada assim que você a cria.
    Em qual contexto seria melhor usar uma função auto invocada ao invés de uma função declarativa?
    Quando você quer executar uma função assim que você a cria.
    ----------------------------------------------------------

6. Funções anônimas
    De exemplos de funções anônimas:
    var funcao = function() {
        return "Hello World!";
    }
    var soma = function(a, b) {
        return a + b;
    }
    De exemplo quefunção anônima com retorno e 5 argumentos com arrow function e função auto invocada e com tipos de dados diferentes
    var soma = ((a, b, c, d, e) => {
        return a + b + c + d + e;
    })(1, 2, "3", 4, 5);

    OBS: Funções anônimas são funções sem nome.
    Qual é a diferença entre uma função anônima e uma função declarativa?
    Uma função anônima não tem nome, uma função declarativa tem nome.
    Em qual contexto seria melhor usar uma função anônima ao invés de uma função declarativa?
    Quando você quer uma função sem nome.
    ----------------------------------------------------------

7. Callback functions
    De exemplos de callback functions:
    function funcao(callback) {
        callback();
    }
    funcao(function() {
        console.log("Hello World!");
    });
    funcao(function() {
        console.log("Hello World!");
    });
    Exemplo de função callback com retorno e 5 argumentos:
    function soma(a, b, callback) {
        callback(a + b);
    }

    OBS: Callback functions são funções que são passadas como argumento para outras funções.
    Qual é a diferença entre uma callback function e uma função declarativa?
    Uma callback function é uma função declarativa que é passada como argumento para outra função.
    Em qual contexto seria melhor usar uma callback function ao invés de uma função declarativa?
    Quando você quer passar uma função como argumento para outra função.
    ----------------------------------------------------------

8. Funções geradoras
    Exemplo de função geradora:
    function* funcao() {
        yield 1;
        yield 2;
        yield 3;
    }
    var it = funcao();
    console.log(it.next().value); // 1
    console.log(it.next().value); // 2
    console.log(it.next().value); // 3

    Exemplo de função geradora com argumentos:
    function* funcao() {
        var index = 0;
        while(true) {
            yield index++;
        }
    }
    var it = funcao();
    console.log(it.next().value); // 0
    console.log(it.next().value); // 1
    console.log(it.next().value); // 2

    OBS: Funções geradoras são funções que podem ser pausadas e retomadas.
    Qual é a diferença entre uma função geradora e uma função declarativa?
    Uma função geradora é uma função declarativa que pode ser pausada e retomada.
    Em qual contexto seria melhor usar uma função geradora ao invés de uma função declarativa?
    Quando você quer uma função que pode ser pausada e retomada.
    
    De exemplo de como poso pausar e retomar uma função geradora:
    function* funcao() {
        var index = 0;
        while(true) {
            yield index++;
        }
    }
    ----------------------------------------------------------

9. Funções assíncronas
    De exemplos de funções assíncronas:
    async function funcao() {
        return "Hello World!";
    }
    async function funcao() {
        throw new Error("Deu erro!");
    }
    async function funcao() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Hello World!");
            }, 2000);
        });
    }
    De exemplo de como posso usar uma função assíncrona com await e try catch e com retorno e 5 argumentos:
    async function funcao() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Hello World!");
            }, 2000);
        });
    }
    async function principal() {
        var valor = await funcao();
        console.log(valor);
    }
    Meu exemplo de como posso usar uma função assíncrona com await e try catch e com retorno e 2 argumentos,
    Preciso usar o try catch para capturar o erro que a função assíncrona pode gerar:
    async function funcao(a, b) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(typeof a !== "number" || typeof b !== "number") {
                    reject("Os valores precisam ser números");
                }
                resolve(a + b);
            }, 2000);
        });
    }
    async function principal() {
        try {
            var valor = await funcao(2, 2);
            console.log(valor);
        } catch(erro) {
            console.log(erro);
        }
    }
    ----------------------------------------------------------

10. Funções imediatas (IIFE)
    De exemplos de funções imediatas:
    (function() {
        console.log("Hello World!");
    })();
    Esta função está repetitiva, é realmente isso que você pode fazer com uma função imediata?
    Sim, você pode fazer isso com uma função imediata.

    OBS: Funções imediatas são funções que são executadas assim que você as cria.
    Qual é a diferença entre uma função imediata e uma função declarativa?
    Uma função imediata é uma função declarativa que é executada assim que você a cria.
    Em qual contexto seria melhor usar uma função imediata ao invés de uma função declarativa?
    Quando você quer executar uma função assim que você a cria.
    ----------------------------------------------------------

11. Funções recursivas
    De exemplos de funções recursivas:
    function funcao() {
        funcao();
    }
    function funcao() {
        if(condicao) {
            funcao();
        }
    }
    De outros exemplos de funções recursivas:
    function funcao(numero) {
        if(numero >= 10) return;
        console.log(numero);
        funcao(numero + 1);
    }

    OBS: Funções recursivas são funções que chamam a si mesmas.
    Qual é a diferença entre uma função recursiva e uma função declarativa?
    Uma função recursiva é uma função declarativa que chama a si mesma.
    Em qual contexto seria melhor usar uma função recursiva ao invés de uma função declarativa?
    Quando você quer chamar a função dentro dela mesma.
    ----------------------------------------------------------

12. Funções de primeira classe
    De exemplos de funções de primeira classe:
    function funcao() {
        return "Hello World!";
    }   
    var funcao = function() {
        return "Hello World!";
    }
    function funcao(callback) {
        return callback();
    }
    function funcao() {
        return function() {
            return "Hello World!";
        }
    }
    function funcao() {
        this.nome = "Luiz";
        this.idade = 62;
    }
    var objeto = new funcao();
    console.log(objeto.nome); // Luiz
    console.log(objeto.idade); // 62

    OBS: Funções de primeira classe são funções que podem ser atribuídas a uma variável, passadas como argumento e retornadas por outra função.
    Qual é a diferença entre uma função de primeira classe e uma função declarativa?
    Uma função de primeira classe é uma função declarativa que pode ser atribuída a uma variável, passada como argumento e retornada por outra função.
    Em qual contexto seria melhor usar uma função de primeira classe ao invés de uma função declarativa?
    Quando você quer uma função que pode ser atribuída a uma variável, passada como argumento e retornada por outra função.
    ----------------------------------------------------------


13. Funções de segunda classe
    De exemplos de funções de segunda classe:
    var funcao = function() {
        return "Hello World!";
    }
    function funcao(callback) {
        return callback();
    }
    function funcao() {
        return function() {
            return "Hello World!";
        }
    }
    function funcao() {
        this.nome = "Luiz";
        this.idade = 62;
    }
    var objeto = new funcao();
    console.log(objeto.nome); // Luiz
    console.log(objeto.idade); // 62

    OBS: Funções de segunda classe são funções que podem ser atribuídas a uma variável e passadas como argumento.
    Qual é a diferença entre uma função de segunda classe e uma função declarativa?
    Uma função de segunda classe é uma função declarativa que pode ser atribuída a uma variável e passada como argumento.
    Em qual contexto seria melhor usar uma função de segunda classe ao invés de uma função declarativa?
    Quando você quer uma função que pode ser atribuída a uma variável e passada como argumento.
    ----------------------------------------------------------

14. Funções de terceira classe
    De exemplos de funções de terceira classe:
    // Função de ordem superior que recebe uma função como argumento
    function operacaoMatematica(x, y, operacao) {
        return operacao(x, y);
    }

    // Funções que serão passadas como argumento
    function soma(a, b) {
        return a + b;
    }

    function multiplicacao(a, b) {
        return a * b;
    }

    // Uso da função de ordem superior com diferentes funções como argumento
    console.log(operacaoMatematica(5, 3, soma)); // Saída: 8
    console.log(operacaoMatematica(5, 3, multiplicacao)); // Saída: 15

    OBS: Funções de terceira classe são funções que podem ser passadas como argumento.
    Qual é a diferença entre uma função de terceira classe e uma função declarativa?
    Uma função de terceira classe é uma função declarativa que pode ser passada como argumento.
    Em qual contexto seria melhor usar uma função de terceira classe ao invés de uma função declarativa?
    Quando você quer uma função que pode ser passada como argumento.
    ----------------------------------------------------------

15. Funções de alta ordem
    // Função de alta ordem que opera em um array e uma função callback
    function operacaoArray(array, callback) {
        const resultado = [];
        for (let i = 0; i < array.length; i++) {
            resultado.push(callback(array[i]));
        }
        return resultado;
    }

    // Função de callback para dobrar um número
    function dobrar(numero) {
        return numero * 2;
    }

    // Função de callback para elevar um número ao quadrado
    function elevarAoQuadrado(numero) {
        return numero ** 2;
    }

    const numeros = [1, 2, 3, 4, 5];

    // Utilizando a função de alta ordem com diferentes funções de callback
    const resultadoDobrado = operacaoArray(numeros, dobrar);
    const resultadoQuadrado = operacaoArray(numeros, elevarAoQuadrado);

    console.log(resultadoDobrado); // Saída: [2, 4, 6, 8, 10]
    console.log(resultadoQuadrado); // Saída: [1, 4, 9, 16, 25]

    OBS: Funções de alta ordem são funções que operam em outras funções, seja recebendo-as como argumento ou retornando-as.
    Qual é a diferença entre uma função de alta ordem e uma função declarativa?
    Uma função de alta ordem é uma função declarativa que opera em outras funções, seja recebendo-as como argumento ou retornando-as.
    Em qual contexto seria melhor usar uma função de alta ordem ao invés de uma função declarativa?
    Quando você quer uma função que opera em outras funções, seja recebendo-as como argumento ou retornando-as.
    ----------------------------------------------------------

16. Funções puras
    // Função pura que realiza uma operação matemática simples
    function dobrarNumero(numero) {
        return numero * 2;
    }

    // Chamada da função pura
    const resultado = dobrarNumero(5);
    console.log(resultado); // Saída: 10

    OBS: Funções puras são funções que retornam o mesmo resultado quando recebem os mesmos argumentos e não causam efeitos colaterais.
    Qual é a diferença entre uma função pura e uma função declarativa?
    Uma função pura é uma função declarativa que retorna o mesmo resultado quando recebe os mesmos argumentos e não causa efeitos colaterais.
    Em qual contexto seria melhor usar uma função pura ao invés de uma função declarativa?
    Quando você quer uma função que retorna o mesmo resultado quando recebe os mesmos argumentos e não causa efeitos colaterais.
    ----------------------------------------------------------

17. Funções de ordem superior
    // Função de ordem superior que recebe uma função como argumento
    function saudacao(nome, callback) {
        return callback(nome);
    }

    // Funções de callback
    function saudacaoPadrao(nome) {
        return `Olá, ${nome}!`;
    }

    function saudacaoFormal(nome) {
        return `Prezado(a) ${nome}, seja bem-vindo(a).`;
    }

    function saudacaoEngracada(nome) {
        return `E aí, ${nome}? Tudo beleza?`;
    }

    // Chamada da função de ordem superior com diferentes funções de callback
    console.log(saudacao('Carlos', saudacaoPadrao)); // Saída: "Olá, Carlos!"
    console.log(saudacao('Maria', saudacaoFormal)); // Saída: "Prezado(a) Maria, seja bem-vindo(a)."
    console.log(saudacao('João', saudacaoEngracada)); // Saída: "E aí, João? Tudo beleza?"

    OBS: Funções de ordem superior são funções que recebem outras funções como argumento ou retornam outras funções como retorno.
    Qual é a diferença entre uma função de ordem superior e uma função declarativa?
    Uma função de ordem superior é uma função declarativa que recebe outras funções como argumento ou retorna outras funções como retorno.
    Em qual contexto seria melhor usar uma função de ordem superior ao invés de uma função declarativa?
    Quando você quer uma função que recebe outras funções como argumento ou retorna outras funções como retorno.
    ----------------------------------------------------------

19. Funções de primeira ordem
    // Atribuindo uma função a uma variável
    const saudacao = function(nome) {
        return `Olá, ${nome}!`;
    };

    // Passando a função como argumento para outra função
    function saudarPessoa(nome, funcaoSaudacao) {
        console.log(funcaoSaudacao(nome));
    }

    saudarPessoa('Lucas', saudacao); // Saída: "Olá, Lucas!"

    Neste exemplo, a função saudacao é atribuída a uma variável e depois passada como argumento para a função saudarPessoa. Isso demonstra a 
    propriedade de funções de primeira ordem, pois a função é tratada como um valor comum, podendo ser usada como argumento em outra função.

    Essa flexibilidade permite um código mais dinâmico e é fundamental para a programação funcional em JavaScript, onde as funções são tratadas 
    como cidadãs de primeira classe, podendo ser manipuladas e usadas de várias maneiras.

    OBS: Funções de primeira ordem são funções que podem ser atribuídas a uma variável e passadas como argumento.
    Qual é a diferença entre uma função de primeira ordem e uma função declarativa?
    Uma função de primeira ordem é uma função declarativa que pode ser atribuída a uma variável e passada como argumento.
    Em qual contexto seria melhor usar uma função de primeira ordem ao invés de uma função declarativa?
    Quando você quer uma função que pode ser atribuída a uma variável e passada como argumento.
    ----------------------------------------------------------

20. Funções de segunda ordem
21. Funções de terceira ordem
22. Funções de quarta ordem
23. Funções de quinta ordem
24. Funções de sexta ordem
25. Funções de sétima ordem
26. Funções de oitava ordem

*/