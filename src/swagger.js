module.exports = {
    "openapi": "3.0.0",
    "info": {
        "title": "API de gerenciamento de tarefas",
        "description": "Esta API permite o gerenciamento de tarefas para times, ela oferece diversas funcionalidades essenciais, incluindo: Criação e gerenciamento de contas de usuários, criação de projetos e atribuição de usuários a esses projetos, cadastro de tarefas, com a possibilidade de atribuí-las a projetos específicos e a usuários.",
        "version": "1.0.0"
    },
    "servers": [
        {
            "url": "http://localhost:3333"
        }
    ],
    "paths": {
        "/users": {
            "get": {
                "summary": "Listagem de usuários",
                "description": "Essa rota será responsável por listar todos os usuários cadastrados no sistema",
                "tags": ["Usuários"],
                "security": [{"bearerAuth": []}],
                "responses": {
                    "200": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": '#/components/schemas/Usuario'
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized"
                    }
                }
            },
            "post": {
                "summary": "Cadastro de usuários",
                "description": "Essa rota será responsável por cadastrar um novo usuário, deve se passar a propriedade group_id com o id de algum dos grupos cadastrados para vinculá-lo a um grupo.",
                "tags": ["Usuários"],
                "security": [{"bearerAuth": []}],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/CriarUsuario"
                            },
                            "examples": {
                                "usuario": {
                                    "value": {
                                        "username": "joaocastro",
                                        "first_name": "João",
                                        "last_name": "Castro",
                                        "email": "joao@teste.com",
                                        "password": "Senha@123#",
                                        "group_id": "4e80aedf-5bad-4117-8f5a-1ecf7d2badfa"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string",
                                            "example": "User created with success!"
                                        },
                                        "user": {
                                            "$ref": '#/components/schemas/RespostaAoCriarUsuario'
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized"
                    }
                }
            }
        },
        "/users/{id}": {
            "get": {
                "summary": "Busca um usuário por ID",
                "description": "Essa rota será responsável por buscar um usuário pelo ID",
                "tags": ["Usuários"],
                "security": [{"bearerAuth": []}],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "ID do usuário",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": '#/components/schemas/Usuario'
                                }
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized"
                    }
                }
            },
            "put": {
                "summary": "Edita um usuário",
                "description": "Essa rota será responsável por editar um usuário pelo ID, pode-se passar no corpo da requisição apenas as informações que se deseja editar",
                "tags": ["Usuários"],
                "security": [{"bearerAuth": []}],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "ID do usuário",
                        "required": true
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/EditarUsuario"
                            },
                            "examples": {
                                "usuario": {
                                    "value": {
                                        "username": "joaocastro",
                                        "first_name": "João",
                                        "last_name": "Castro",
                                        "email": "joao@teste.com",
                                        "group_id": "4e80aedf-5bad-4117-8f5a-1ecf7d2badfa"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "message": {
                                            "type": "string",
                                            "example": "user width id 02fd385c-f024-44f1-8da3-1a0fc1178a1a updated with success!"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized"
                    }
                }
            },
            "delete": {
                "summary": "Deleta um usuário",
                "description": "Essa rota será responsável por deletar um usuário",
                "tags": ["Usuários"],
                "security": [{"bearerAuth": []}],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "ID do usuário",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "message": {
                                            "type": "string",
                                            "example": "user width id 15e4acbd-4991-4d89-95a0-9787467e9581 deleted with success!"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized"
                    }
                }
            }
        },
        "/tasks": {
            "get": {
                "summary": "Listagem de tarefas",
                "description": "Essa rota será responsável por listar todas as tarefas existentes no sistema",
                "tags": ["Tarefas"],
                "security": [{"bearerAuth": []}],
                "responses": {
                    "200": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": '#/components/schemas/Tarefa'
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized"
                    }
                }
            },
            "post": {
                "summary": "Cadastro de tarefas",
                "description": "Essa rota será responsável por cadastrar uma nova tarefa, deve-se passar as propriedades assigned_to e column_id para associar a um usuário responsável e a uma coluna de projeto, respectivamente.",
                "tags": ["Tarefas"],
                "security": [{"bearerAuth": []}],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/CriarTarefa"
                            },
                            "examples": {
                                "tarefa": {
                                    "value": {
                                        "title": "Criar header",
                                        "description": "Criar componente de cabeçalho do site",
                                        "assigned_to": "02fd385c-f024-44f1-8da3-1a0fc1178a1a",
                                        "column_id": "ea09cbe9-f317-46ed-9c1a-d94060256fe4"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string",
                                            "example": "User created with success!"
                                        },
                                        "user": {
                                            "$ref": '#/components/schemas/RespostaAoCriarUsuario'
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized"
                    }
                }
            }
        },
        "/tasks/{id}": {
            "get": {
                "summary": "Busca uma tarefa por ID",
                "description": "Essa rota será responsável por buscar uma tarefa pelo ID",
                "tags": ["Tarefas"],
                "security": [{"bearerAuth": []}],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "ID da tarefa",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": '#/components/schemas/Tarefa'
                                }
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized"
                    }
                }
            },
            "put": {
                "summary": "Edita uma tarefa",
                "description": "Essa rota será responsável por editar uma tarefa pelo ID, pode-se passar no corpo da requisição apenas as informações que se deseja editar",
                "tags": ["Tarefas"],
                "security": [{"bearerAuth": []}],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "ID da tarefa",
                        "required": true
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/TarefaEntrada"
                            },
                            "examples": {
                                "usuario": {
                                    "value": {
                                        "title": "Criar header",
                                        "description": "Criar componente de cabeçalho do site",
                                        "assigned_to": "02fd385c-f024-44f1-8da3-1a0fc1178a1a",
                                        "column_id": "ea09cbe9-f317-46ed-9c1a-d94060256fe4"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "message": {
                                            "type": "string",
                                            "example": "task width id 46fe56bd-4787-44d5-855d-453b95c99db2 updated with success!"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized"
                    }
                }
            },
            "delete": {
                "summary": "Deleta um tarefa",
                "description": "Essa rota será responsável por deletar uma tarefa",
                "tags": ["Tarefas"],
                "security": [{"bearerAuth": []}],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "ID da tarefa",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "message": {
                                            "type": "string",
                                            "example": "task width id 15e4acbd-4991-4d89-95a0-9787467e9581 deleted with success!"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized"
                    }
                }
            }
        },
        "/projects": {
            "get": {
                "summary": "Listagem de projetos",
                "description": "Essa rota será responsável por listar todas os projetos existentes no sistema",
                "tags": ["Projetos"],
                "security": [{"bearerAuth": []}],
                "responses": {
                    "200": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": '#/components/schemas/Usuario'
                                }
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized"
                    }
                }
            },
            "post": {
                "summary": "Cadastro de projetos",
                "description": "Essa rota será responsável por cadastrar um novo projeto, 'name' é o único parâmetro necessário no corpo da requisição.",
                "tags": ["Projetos"],
                "security": [{"bearerAuth": []}],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "examples": {
                                "projeto": {
                                    "value": {
                                        "name": "UI/UX do site",
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string",
                                            "example": "project created with success!"
                                        },
                                        "project": {
                                            "$ref": '#/components/schemas/Projeto'
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized"
                    }
                }
            }
        },
        "/projects/{id}/users": {
            "get": {
                "summary": "Retorna os responsáveis de um projeto",
                "description": "Retorna os dados de um projeto com a lista de todos os usuários vinculados a ele.",
                "tags": ["Projetos"],
                "security": [{"bearerAuth": []}],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "ID do projeto",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": '#/components/schemas/ProjetoComResponsaveis'
                                }
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized"
                    }
                }
            },
        },
        "/projects/{id}": {
            "get": {
                "summary": "Busca um projeto por ID",
                "description": "Essa rota será responsável por buscar um projeto pelo ID.",
                "tags": ["Projetos"],
                "security": [{"bearerAuth": []}],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "ID do projeto",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": '#/components/schemas/Projeto'
                                }
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized"
                    }
                }
            },
            "put": {
                "summary": "Edita o nome de um projeto",
                "description": "Essa rota poderá ser utilizado caso se deseje alterar o nome do projeto.",
                "tags": ["Projetos"],
                "security": [{"bearerAuth": []}],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "ID do projeto",
                        "required": true
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "examples": {
                                "projeto": {
                                    "value": {
                                        "name": "Novo nome do projeto",
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "message": {
                                            "type": "string",
                                            "example": "project width id 02fd385c-f024-44f1-8da3-1a0fc1178a1a updated with success!"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized"
                    }
                }
            },
            "delete": {
                "summary": "Deleta um projeto",
                "description": "Essa rota será responsável por deletar um projeto",
                "tags": ["Projetos"],
                "security": [{"bearerAuth": []}],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "ID do projeto",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "properties": {
                                        "message": {
                                            "type": "string",
                                            "example": "project width id 15e4acbd-4991-4d89-95a0-9787467e9581 deleted with success!"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized"
                    }
                }
            }
        },
        "/projects/add-user": {
            "post": {
                "summary": "Vincula responsável a um projeto",
                "description": "Essa rota será responsável por vincular um usuário a um projeto",
                "tags": ["Projetos"],
                "security": [{"bearerAuth": []}],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "examples": {
                                "projeto": {
                                    "value": {
                                        "project_id": "c2cffa18-b953-45ef-870e-1465bd27421e",
                                        "user_id": "02fd385c-f024-44f1-8da3-1a0fc1178a1a"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "OK",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string",
                                            "example": "User 02fd385c-f024-44f1-8da3-1a0fc1178a1a added with success to project c2cffa18-b953-45ef-870e-1465bd27421e!"
                                        },
                                        "project": {
                                            "$ref": '#/components/schemas/Projeto'
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "401": {
                        "description": "Unauthorized"
                    }
                }
            }
        },
    },
    "components": {
        "schemas": {
            "Usuario": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string"
                    },
                    "username": {
                        "type": "string"
                    },
                    "first_name": {
                        "type": "string"
                    },
                    "last_name": {
                        "type": "string"
                    },
                    "email": {
                        type: "string"
                    },
                    "updatedAt": {
                        type: "string"
                    },
                    "createdAt": {
                        type: "string"
                    },
                    "group": {
                        "$ref": "#/components/schemas/Grupo"
                    }
                }
            },
            "UsuarioVinculado": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string"
                    },
                    "username": {
                        "type": "string"
                    },
                    "first_name": {
                        "type": "string"
                    },
                    "last_name": {
                        "type": "string"
                    }
                }
            },
            "Tarefa": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string"
                    },
                    "title": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    },
                    "createdAt": {
                        type: "string"
                    },
                    "updatedAt": {
                        type: "string"
                    },
                    "column": {
                        "$ref": "#/components/schemas/Coluna"
                    },
                    "user": {
                        "$ref": "#/components/schemas/UsuarioVinculado"
                    }
                }
            },
            "TarefaEntrada": {
                "type": "object",
                "properties": {
                    "title": {
                        "type": "string"
                    },
                    "description": {
                        "type": "string"
                    },
                    "assigned_to": {
                        "type": "string"
                    },
                    "column_id": {
                        "type": "string"
                    },
                }
            },
            "Projeto": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                    "createdAt": {
                        type: "string"
                    },
                    "updatedAt": {
                        type: "string"
                    }
                }
            },
            "ProjetoComResponsaveis": {
                "type": "object",
                "allOf": [
                    {
                        "$ref": "#/components/schemas/Projeto",
                    },
                    {
                        "type": "object",
                        "properties": {
                            "users": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/components/schemas/UsuarioVinculado"
                                }
                            }
                        }
                    }
                ]
            },
            "CriarUsuario": {
                "type": "object",
                "properties": {
                    "username": {
                        "type": "string"
                    },
                    "first_name": {
                        "type": "string"
                    },
                    "last_name": {
                        "type": "string"
                    },
                    "email": {
                        "type": "string"
                    },
                    "password": {
                        "type": "string"
                    },
                    "group_id": {
                        "type": "string"
                    }
                }
            },
            "EditarUsuario": {
                "type": "object",
                "properties": {
                    "username": {
                        "type": "string"
                    },
                    "first_name": {
                        "type": "string"
                    },
                    "last_name": {
                        "type": "string"
                    },
                    "email": {
                        "type": "string"
                    },
                    "group_id": {
                        "type": "string"
                    }
                }
            },
            "RespostaAoCriarUsuario": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string"
                    },
                    "username": {
                        "type": "string"
                    },
                    "first_name": {
                        "type": "string"
                    },
                    "last_name": {
                        "type": "string"
                    },
                    "email": {
                        "type": "string"
                    },
                    "group_id": {
                        "type": "string"
                    },
                    "updatedAt": {
                        type: "string"
                    },
                    "createdAt": {
                        type: "string"
                    },
                }
            },
            "Grupo": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                }
            },
            "Coluna": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    },
                }
            }
        },
        "securitySchemes": {
            "bearerAuth": {
                "type": "http",
                "scheme": "bearer",
                "bearerFormat": "JWT"
            }
        }
    } 
}