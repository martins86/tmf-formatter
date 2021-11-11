# Criando um Formatter NPM Package com TypeScript

## Comandos

```sh
## Iniciando
mkdir tmf-formatter
cd tmf-formatter
git init
```

```sh
## Iniciando um package.json
npm init
```

```sh
## Dependências para desenvolvimento com typescript
npm install typescript nodemon ts-node @types/node --save-dev
npm install -g ts-node
```

```sh
## Iniciando um tsconfig.json
{
    "compilerOptions": {
      "target": "es5",
      "module": "commonjs",
      "outDir": "./dist",
      "strict": true,
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "noImplicitReturns": true,
      "noFallthroughCasesInSwitch": true,
      "esModuleInterop": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "**/*.test.ts"]
  }
```

```sh
## Login no npmjs.com *( é preciso de um registro de usuário).

# Adicionar informações de usuário
npm adduser
# Logar
npm login
# Ver conta logada
npm whoami
```

```sh
## Publicando package no npmjs.com *( é preciso de um registro de usuário).
npm publish
# Publicado
https://www.npmjs.com/package/tmf-formatter
```

```sh
## Removendo publicação do npmjs.com
npm unpublish --force tmf-formatter
```
