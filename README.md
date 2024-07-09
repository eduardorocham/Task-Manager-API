# Task Manager API

Bem-vindo à Task Manager API, uma API que permite gerenciar tarefas de forma eficiente e intuitiva.

## Índice

- [Introdução](#introdução)
- [Instalação](#instalação)
- [Uso](#uso)
- [Documentação](#documentação)

## Introdução

A Task Manager API oferece diversas funcionalidades essenciais, incluindo: Criação e
gerenciamento de contas de usuários, criação de projetos e atribuição de usuários a esses
projetos, cadastro de tarefas, com a possibilidade de atribuí-las a projetos específicos e a
usuários, implementação de um sistema de autenticação que garante a segurança dos dados
dos usuários, diferenciação de tipos de perfil com permissões específicas para cada um,
assegurando que os usuários tenham acesso apenas às funcionalidades adequadas ao seu nível
de permissão.

## Instalação

Para instalar a Task Manager API, siga as instruções abaixo:

```bash
# Clonar o repositório
git clone https://github.com/eduardorocham/Task-Manager-API.git

# Navegar até o diretório do projeto
cd Task-Manager-Api

# Instalar as dependências
npm install
```

## Uso

Para iniciar a API localmente, execute o seguinte comando:

```bash
npm run dev
```

A API estará disponível em http://localhost:3333 por padrão.

## Documentação

A documentação completa da API está disponível via Swagger. Para visualizar a documentação, siga os passos abaixo:

    1. Inicie a API localmente.
    2. Abra seu navegador e navegue até http://localhost:3333/api-docs

A documentação do Swagger inclui detalhes sobre todos os endpoints, parâmetros, respostas e exemplos de requisições.
