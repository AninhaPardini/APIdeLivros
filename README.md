## Estudo de Node.js na Alura

Me chamo Ana Luiza e sou dev junior, com conhecimento em frontend e buscando a formação fullstack. Este repositório tem minhas anotações de estudo e evoluções em conjunto com o curso da Alura de Node.js: API Rest com Express e MongoBD.

1. Conhecendo e criando servidor

Comecei importando da lib do node o http para poder usa-lo, e então defini a variavel de porta. Depois disso fiz a criação do server e armazenei na const server. Defini os parâmetros de requisição e respota a ela com res e req. E defini que quando online irá enviar uma mensagem na página, depois criei uma variavel que defini rotas e suas respostas e adicionei a função do servidor como res.

2. Usando o Express

Nesta etapa fiz a mudança das rotas e suas saídas para dentro de ./src/app.js onde importei o express e configurei os primeiros get e exportei o para utilizar no server.js.

3. GET, POST, PUT E DELETE

A primeira coisa feita foi adicionar um livro a array, e devolver um texto de resultado, usando o metodo post eu recolhi do postman o texto em json porem ele retornou null, com isso tive que criar uma constante app.use que permitisse utilizar e ler um aplicativo .json.

Depois disso criei o verbo PUT onde pelo http posso navegar entre os id e atualizar um dado como o title.