const http = require('http');

const hostname = '127.0.0.1';
const port = 3008;
const url = `http://${hostname}:${port}`;
const token = 'ABCDE5678';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  switch (req.url) {
    case '/login':
      res.setHeader('Set-Cookie', [
        `token=${token}; HttpOnly`,
        'qwe=XXX',
      ]);

      res.end(`
        <div><a href="${url}">Home</a></div>
        <div><a href="${url}/about">About</a></div>
        <div><a href="${url}/admin">Admin</a></div>
        <h1>Login Success!</h1>
      `);
      break;
    case '/admin':
      const cookie = req.headers?.cookie?.split('; '); //  token=ABCDE5678; qwe=XXX
      const reqToken = cookie?.[0]?.replace('token=', '');

      if (reqToken !== token) {
        res.end('HTTP/1.1 401 Unauthorized\r\n\r\n'); // status?
      } else {
        res.end(`
        <div><a href="${url}">Home</a></div>
        <div><a href="${url}/about">About</a></div>
        <div><a href="${url}/admin">Admin</a></div>
        <h1>Admin panel. Some sequre content</h1>
      `);
      }
      break;
    case '/about':
      res.end(`
        <div><a href="${url}">Home</a></div>
        <div><a href="${url}/login">Login</a></div>
        <div><a href="${url}/admin">Admin</a></div>
        <h1>About.</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      `);
      break;
    default:
      res.end(`
        <div><a href="${url}/about">About</a></div>
        <div><a href="${url}/login">Login</a></div>
        <div><a href="${url}/admin">Admin</a></div>
        <h1>Hello programmer!</h1>
      `);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at ${url}`);
});