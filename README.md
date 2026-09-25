# ONG Esperança

Projeto web desenvolvido para a ONG Esperança, com o objetivo de apresentar suas iniciativas sociais, facilitar o contato com a organização e permitir o cadastro de pessoas interessadas em participar dos projetos.

## Estrutura do projeto

projeto.ong/
├── README.md
├── css/
│   └── style.css
├── html/
│   ├── index.html
│   ├── projetos.html
│   ├── contato.html
│   └── cadastro.html
├── img/
│   ├── logo.png
│   ├── doacao.png
│   ├── educacao.jpg
│   ├── saude.jpg
│   ├── sustentabilidade.jpg
│   └── voluntariado.jpg
└── js/
    ├── forms.js
    ├── interactions.js
    ├── main.js
    ├── masks.js
    ├── storage.js
    └── views.js

## Tecnologias utilizadas

O projeto foi desenvolvido utilizando HTML5, CSS3 e JavaScript.

O JavaScript foi organizado em módulos ES6, utilizando `import` e `export` para separar as responsabilidades da aplicação.

## Funcionalidades

A aplicação possui páginas para apresentação da ONG, visualização dos projetos, contato e cadastro.

Entre as principais funcionalidades estão a navegação entre páginas, menu responsivo, alteração de tema visual, máscaras para CPF, telefone e CEP, validação dos formulários e armazenamento de informações no `localStorage`.

## Organização do JavaScript

O arquivo main.js coordena a inicialização da aplicação.

O arquivo views.js contém os templates utilizados para a renderização das páginas da aplicação.

O arquivo forms.js concentra as funcionalidades relacionadas aos formulários e suas validações.

O arquivo interactions.js reúne funcionalidades de interação, como menu, tema e navegação.

O arquivo masks.js aplica as máscaras de entrada para CPF, telefone e CEP.

O arquivo storage.js centraliza as operações de armazenamento utilizando o `localStorage`.

## Armazenamento de dados

Os dados enviados pelos formulários são armazenados no `localStorage` do navegador.

As informações são convertidas para JSON com `JSON.stringify()` antes do armazenamento e recuperadas posteriormente com `JSON.parse()`.

## Execução

Para executar o projeto, abra o arquivo `index.html` localizado na pasta `html/` em um navegador compatível com JavaScript e módulos ES6.

## Versionamento

O projeto utiliza Git para controle de versão e segue uma organização baseada no GitFlow.

A branch `master` representa a versão estável do projeto.

A branch `develop` concentra o desenvolvimento contínuo.

As branches `feature/` são utilizadas para desenvolver funcionalidades específicas de forma isolada antes da integração com a branch de desenvolvimento.

## Autor

Eduarda Oliveira da Silva

Projeto desenvolvido como atividade prática da disciplina de Desenvolvimento Front-end.
