# Carteira digital



Aplicação web de carteira digital

## Instalação backend



Dentro da pasta backend, instale as dependências:

`npm install`

Após configure o dcoker para rodar o backend com:
`docker-compose up -d`

Use os seguintes comandos para criar as tabelas e popular a tabela:
`npx sequelize-cli db:migrate`

`npx sequelize-cli db:seed:all`

Inicie o backend com:

`npm start`

Por padrão o backend será executado na porta 3030 e o banco de dados na 15432.



## Instalação frontend



Dentro da pasta frontend, instale as dependências:

`npm install`

Inicie o frontend com:

`npm start`

Por padrão o frontend será executado na porta 3000



## API

### Usuário

#### POST - Criar usuário

/usuario

paramêtros: login, senha, nome

#### GET - Obter usuário

/usuario/{login}

paramêtro: login



### Saldo

#### GET - Obter saldo atual de usuário

/saldo/{login}

paramêtros: login



### Movimentação

#### POST - Criar nova movimentação

/movimentacao

paramêtros: login_origem, login_destino, valor_transferido

#### GET - Obter todo histórico de movimentações

/extrato/{login}

paramêtro: login



### Sessão

#### POST - Autenticar sessão de usuário

/session

paramêtros: login, senha
