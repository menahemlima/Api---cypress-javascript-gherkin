# Projeto de automação Web
Projeto de automação (e2e) desenvolvido com o framework de automação Cypress com JavaScript
<br>

## 1. Descrição do framework: Cypress & JavaScript

 - **Cypress** é uma ferramenta de teste (automatizado) de front-end e back-end criada para a web moderna. Cypress é uma plataforma gratuita da Galapagos, de código aberto , instalado localmente e um serviço de Dashboard para gravar os testes.
 > Fonte: [docs.cypress.io](https://docs.cypress.io/)

<br>

## 2. Documentação das dependências do projeto

 - Este projeto tem as dependências listadas abaixo, e devem ser baixadas/instaladas na sua máquina para execução do mesmo:
	 - Node JS
		 - [Link com as orientações para download/instalação](https://nodejs.org/en/download/).
	 - NPM
		 - [Link com as orientações para download/instalação](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
<br>

## 3. Comando para instalação das dependências do projeto
`npm install -f`
<br>

## 4. Comando para execução do projeto e criação do relatório de testes

para executar todos os testes regressivos: 

`npx cypress run`

<br>
para executar apenas um arquivo específico:

`npx cypress run login.feature`
<br>

para gerar o relatório completo:

`node cucumber-html-report.js`
<br>

## 5. Estrutura do projeto:

- e2e/features: diretório que possui os arquivos com os cenários de testes na linguagem Gherkin.

- e2e/step_definitions: diretório que possui todas as steps dos cenários de testes juntamente com as funções.

- e2e/requests: diretório que possui todos os arquivos de requests da api.
