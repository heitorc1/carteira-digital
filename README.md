# Carteira digital



Aplicação web de carteira digital

## Testar projeto



Para iniciar o projeto digite

`docker-compose up -d`

Por padrão, o backend roda na porta 8000, frontend na porta 3000 e banco de dados Postgres na porta 15432



## API

### Usuário

#### POST - Criar usuário

/user

parameters: login, password, name

#### GET - Obter usuário

/user/{login}

parameters: login



### Saldo

#### GET - Obter saldo atual de usuário

/balance/{login}

parameters: login



### Movimentação

#### POST - Criar nova movimentação

/transaction

parameters: login_source, login_destination, transaction_value

#### GET - Obter todo histórico de movimentações

/extract/{login}

parameters: login



### Sessão

#### POST - Autenticar sessão de usuário

/session

parameters: login, password