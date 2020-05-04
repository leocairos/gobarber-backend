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
