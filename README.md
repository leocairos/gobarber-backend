# gobarber-backend

Backend do Projeto GoBarber.
Primeiro projeto NodeJS com TypeScript, ESLint e Prettier


## Ambiente de desenvolvimento

* Node
* Yarn
* Visual Studio Code
    * Dracula
    * Material icon Theme
    * Jira Code Font

```
const path = require('path')
path.resolve(__dirname, 'src', 'index.js')
use o path ao inves de ./src/index.js devivo as diferenças entre SOs
```

## Criar projeto NodeJs com TypeScript

```
$ mkdir pasta-projeto
$ cd pasta-projeto
$ yarn init -y
$ yarn add express
$ yarn add -D @types/express typescript ts-node-dev eslint-import-resolver-typescript
$ yarn tsc --init

Configurar tsconfig.json
    "outDir": "./dist",
    "rootDir": "./src",

Configurar script no package.json
    "scripts": {
        "build": "tsc",
        "dev:server":"ts-node-dev --transpileOnly --ignore-watch node-modules src/server.ts"
    },

Configurar .eslintrc.json
    "rules": {
        "import/extensions": [
        "error",
        "ignorePackages",
        {
            "ts": "never"
        }
        ]
    },
    "settings": {
        "import/resolver": {
        "typescript": {}
        }
    }

```

## Padronizar projeto

```
* Instalar plugin "EditorConfig for VS Code"
* Botão direito na pasta do projeto e escolher "Generate .editorconfig"

* Instalar plugin "ESLint"


$ yarn add eslint -D

$ yarn eslint --init
    ? How would you like to use ESLint? To check syntax, find problems, and enforce code style
    ? What type of modules does your project use? JavaScript modules (import/export)
    ? Which framework does your project use? None of these
    ? Does your project use TypeScript? Yes
    ? Where does your code run? Node
    ? How would you like to define a style for your project? Use a popular style guide
    ? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
    ? What format do you want your config file to be in? JSON
    ? Would you like to install them now with npm? No

$ yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.20.1 @typescript-eslint/parser@latest

* atualizar settings.json
    "[javascript]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },
    "[javascriptreact]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },
    "[typescript]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },
    "[typescriptreact]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },
```

### Prettier

$ yarn add -D prettier eslint-config-prettier eslint-plugin-prettier

Configurar .eslintrc.json
    ...
    "extends": [
        "airbnb-base",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:@prettier/recommended"
    ],
    ...
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ],
    ...
    "rules": {
        "prettier/prettier": "error",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "ts": "never"
            }
        ]
    },

Criar prettier.config.js
	module.exports = {
		singleQuote: true,
		trailingComma: "all",
		arrowParens: "avoid",
	};


### Debug

* Na guia lateral Run (bug) clicar em "create a launch.json file

```
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "protocol": "inspector",
      "restart": true,
      "name": "Debug",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "outFiles": [
        "${workspaceFolder}/**/*.js"
      ]
    }
  ]
}
```

* Atualizar package.json

```
"dev:server": "ts-node-dev --inspect --transpileOnly --ignore-watch node-modules src/server.ts"
```

### Lembretes

* Migration
  * yarn typeorm migration:create -n CreateAppointments
  * yarn typeorm migration:run
  * yarn typeorm migration:revert

### Conceitos

* SoC - Separation of Concerns
* DTO - Data Transfer Object
* SOLID
  * Single Responsability Principle
  * O-pen Closed Principle
  * Liskov Substitution Principle
  * I-nterface Segregation Principle
  * Dependecy Inversion Principle
* DRY - Don't Repeat Yourself
* KISS - Keep It Simple & Stupid

### Links

* http://www.md5.cz/ - Online generator md5 hash of a string
* https://jwt.io/ - JWT.IO allows you to decode, verify and generate JWT.


### settings.json

```
{
    "workbench.colorTheme": "Dracula",
    "workbench.iconTheme": "material-icon-theme",
    "workbench.startupEditor": "newUntitledFile",
    "terminal.integrated.fontSize": 14,
    "editor.tabSize": 2,
    "editor.fontSize": 18,
    "editor.lineHeight": 24,
    "editor.fontFamily": "Fira Code",
    "editor.fontLigatures": false,
    "explorer.compactFolders": false,
    "editor.renderLineHighlight": "gutter",
    "workbench.editor.labelFormat": "short",
    "extensions.ignoreRecommendations": true,
    "javascript.updateImportsOnFileMove.enabled": "never",
    "typescript.updateImportsOnFileMove.enabled": "never",
    "breadcrumbs.enabled": true,
    "editor.parameterHints.enabled": false,
    "explorer.confirmDragAndDrop": false,
    "explorer.confirmDelete": false,
    "editor.rulers": [
        80,
        120
    ],
    "[javascript]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },
    "[javascriptreact]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },
    "[typescript]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },
    "[typescriptreact]": {
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true,
        }
    },
    "git.enableSmartCommit": true,
    "window.zoomLevel": 0,
    "editor.minimap.enabled": false,

    "editor.semanticHighlighting.enabled": false,

    "material-icon-theme.activeIconPack": "nest",

    "material-icon-theme.folders.associations": {
        "infra": "app",
        "entities": "class",
        "schemas": "class",
        "typeorm": "database",
        "repositories": "mappings",
        "http": "container",
        "migrations": "tools",
        "modules": "components",
        "implementarions": "core",
        "dtos": "typescript",
        "fakes": "mock"
    },

    "material-icon-theme.files.associations": {
        "ormconfig.json": "database",
        "tsconfig.json": "tune"
    }
}
```

### Reorganizar pastas do projeto

* reorganizar pastas do projeto por dominio
* ajustar tsconfig.json para facilitar imports
  * "baseUrl"
  * "paths"

### Criação de Controllers

* utilizar no máximo 5 metodos em cada
  - index
  - show
  - create
  - update
  - delete

### Others

- VSCode extensions
  - Name: Live Server Id: ritwickdey.liveserver
    Description: Launch a development local Server with live reload feature for static & dynamic pages

* Limpar cache de testes do JEST
  * $ yarn jest --clearCache

* Instalar Mongo DB no Docker
  * $ docker run --name mongodb -p 27017:27017 -d -t mongo
  * $ docker start mongodb

* mongodb compass community para gerenciar o Mongo

* ormconfig.json
```
[
  {
    "name": "default",
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "docker",
    "password": "docker",
    "database": "gostack_gobarber",
    "entities": [
      "./src/modules/**/infra/typeorm/entities/*.ts"
    ],
    "migrations": [
      "./src/shared/infra/typeorm/migrations/*.ts"
    ],
    "cli": {
      "migrationsDir": "./src/shared/infra/typeorm/migrations"
    }
  },
  {
    "name": "mongo",
    "type": "mongodb",
    "host": "localhost",
    "port": 27017,
    "database": "gobarber",
    "useUnifiedTopology": true,
    "entities": [
      "./src/modules/**/infra/typeorm/schemas/*.ts"
    ]
  }
]

```

### AWS SES

* Para novos usuários do Amazon SES – Se você ainda não solicitou um aumento no limite de envios, isso significa que você ainda está no ambiente de sandbox e só poderá enviar e-mails para endereços previamente verificados. Para confirmar um novo endereço de e-mail ou domínio, consulte a seção Identity Management do console do Amazon SES.

```
Checking the Sandbox Status for Your Account

You can use the Amazon SES console to determine if your account is still in the sandbox.

To determine if your account is in the sandbox

Open the Amazon SES console at https://console.aws.amazon.com/ses/.

Use the Region selector to choose an AWS Region.

In the navigation pane, under Email Sending, choose Sending Statistics.

If your account is still in the sandbox in the AWS Region that you selected, you see a banner at the top of the page that resembles the example in the following image.
```

### Amazon S3 = CDN (Content Delivery Network)

* criar conta IAM (obter ID an secret key) com acesso S3
* criar bucket

### Cache Provider

* Redis (Tabela unica com chave e valor)
  * $ docker run --name redis -p 6379:6379 -d -t redis:alpine
  * $ docker start redis


### Testes Automatizados

* instalar jest
  - $ yarn add -D jest
  - $ yarn add -D @types/jest
  - $ yarn jest --init
  - ```
    √ Would you like to use Jest when running "test" script in "package.json"? ... yes
    √ Choose the test environment that will be used for testing » node
    √ Do you want Jest to add coverage reports? ... no
    √ Automatically clear mock calls and instances between every test? ... yes
    ```
  - $ yarn add -D ts-jest
* Configurar 'jest.config.ts'

  ```
  preset: 'ts-jest',
  ```

  ```
  testMatch: [
     "**/*.spec.ts"
  ],
  ```

# ----------- Mapeamento de requisitos ---------------

# Recuperação de senha

**RF - Requisitos Funcionais**

- O usuário deve poder recuperar sua senha informando seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF - Requisitos Não Funcionais**

- Utilizar Mailtrap para testar envio em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN - Regras de Negócio**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**RF**

- O usuário deve poder atualizar seu nome, e-mail e senha;

**RN**

- O usuário não pode atualizar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenadas em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador posso controlar;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h e 18h (Primeiro às 8h, último às 17h);
- O usuário não pode agendar um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;

