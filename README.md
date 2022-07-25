# Desafio XP Carteira de Investimentos

 Esse foi um projeto desenvolvido durante a etapa de desafio técnico do processo seletivo XP para turma XP da Trybe.

Foram passadas instruções a serem seguidas pelos participantes do processo, de modo que ao fim desse processo os mesmo tivessem tido contato com um pouco do que é vivenciado no dia-a-dia da XP.


## 🚀 Começando

Clone o repositório 
```
git clone git@github.com:mislainemds/desafio-XP.git
```
Entre na pasta do repositório que acabou de clonar

### 📋 Pré-requisitos

## Rodando localmente
- Para rodar localmente é preciso ter instalado na maquina:

* Node
* MYSQL
* NPM

Instale as dependências do projeto rodando o seguinte comando:

```
npm install
```

Inicie o servidor:

```
npm start
```

## Rodando com Docker
Para rodar com Docker é preciso ter instalado na maquina:

* Docker
* Docker-Compose

Inicie com o comando:
```
docker-compose up
```

## ⚙️ Executando os testes

Para executar os testes:
```
npm test
```
ou
```
npm test nomeDoArquivo
```


## 📦 O que foi desenvolvido

:heavy_check_mark: /investimentos
- [x] - POST /investimentos/comprar
- [x] - POST /investimentos/vender

:heavy_check_mark: /ativos
- [x] - GET /ativos/:id
- [x] - GET /ativos/cliente/:id

:heavy_check_mark: /conta
- [x] - POST /conta/deposito
- [x] - POST /conta/saque
- [x] - GET /conta/:id


## 🛠️ Construído com

* Node.js com Express
* ORM - sequelize
* Mocha
* Chai
* Sinon

## Melhorias

Documentação de API

Deploy

Autenticação e autorização JWT

Testes unitários

