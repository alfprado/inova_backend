# Inova API

## Instalação

clone o repositório

```bash
git clone https://github.com/alfprado/inova_backend.git
```
entre no diretório inova_backend
```bash
cd inova_backend
```
instale as dependências
```bash
npm install
```

configure as variaveis de ambiente no arquivo .env

### Migrations

execute o comando abaixo para criar as tabelas do banco de dados

```bash
adonis migration:run
```
execute o seed para criação do usuário admin

```bash
adonis seed
```

### Execução 

```bash
adonis serve
```