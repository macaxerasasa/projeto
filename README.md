# Herança Maldita

Site estático responsivo de **Herança Maldita**.

## Como abrir o site

### Opção rápida

Abra a pasta do projeto e dê dois cliques no arquivo `index.html`. O site será
aberto diretamente no seu navegador padrão.

### Usando o servidor local (recomendado)

1. Abra um terminal.
2. Entre na pasta do projeto:

```bash
cd /workspace/projeto
```

3. Inicie o site:

```bash
npm start
```

4. Abra [http://localhost:4173](http://localhost:4173) no navegador.

Para encerrar o servidor, volte ao terminal e pressione `Ctrl + C`.

Se a plataforma definir a variável de ambiente `PORT`, o servidor a utiliza
automaticamente. Ele também escuta em `0.0.0.0`, permitindo que o preview seja
aberto em ambientes de desenvolvimento remotos.

## Desenvolvimento

O servidor requer apenas o Node.js e não instala dependências. Para iniciar o
site em modo de desenvolvimento, também é possível usar:

```bash
npm run dev
```
