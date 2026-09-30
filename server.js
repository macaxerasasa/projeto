const http = require('node:http');
const path = require('node:path');
const { readFile } = require('node:fs/promises');

const host = '0.0.0.0';
const port = Number(process.env.PORT) || 4173;
const publicDirectory = __dirname;

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
};

const server = http.createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url, `http://${request.headers.host || host}`);
    const requestedPath = decodeURIComponent(requestUrl.pathname);
    const relativePath = requestedPath === '/' ? 'index.html' : requestedPath.replace(/^\/+/, '');
    const filePath = path.resolve(publicDirectory, relativePath);

    if (!filePath.startsWith(`${publicDirectory}${path.sep}`)) {
      response.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Acesso negado');
      return;
    }

    const content = await readFile(filePath);
    response.writeHead(200, {
      'Content-Type': contentTypes[path.extname(filePath)] || 'application/octet-stream',
      'Cache-Control': 'no-cache',
    });
    response.end(content);
  } catch (error) {
    if (error.code !== 'ENOENT') {
      console.error(error);
    }
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Página não encontrada');
  }
});

server.listen(port, host, () => {
  console.log(`Herança Maldita disponível em http://localhost:${port}`);
});
