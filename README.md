## GUICK Yeoman Generator

A Yeoman generator to create [guick](https://github.com/wdavilaneto/guick).json

## Usage

Install `Yeoman` and `Guick Generator`:

```
npm install -g yo generator-guick
```

Make a new directory and `cd` into it:

```
mkdir my-project && cd $_
```

Run `guick generator` and answer the questions.

```
yo guick
```

Use the generated `guick.json` to bootstrap your [Guick](https://github.com/wdavilaneto/guick) Project.

And be happy! o/

## TODO

1. [x] ~~stop using .yo-rc.json and write guick.json~~
2. [x] ~~template~~
3. [ ] download [Guick](https://github.com/wdavilaneto/guick) and start the project with generated guick.json
4. [ ] generate tablePrefix and tables info

## License

MIT

## Author

[Lennon Jesus](https://github.com/lennonjesus)



OK guick:init - cria o guick.json dentro de uma pasta
OK guick:source - baixa os sources


guick:create - cria a pasta do projeto e o guick.json

guick:gen - gera o projeto a partir do guick.json

guick:prepare - constrói o projeto gerado (usando java/gradle, npm install e bower install)
