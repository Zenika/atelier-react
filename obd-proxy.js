var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({
  target: 'http://api.openbeerdatabase.com/'
});

proxy.on('error', function(error, req, res) {
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });

  console.error('[Proxy]', error);
});

module.exports = function proxyMiddleware(req, res, next) {
  if (/^\/v1/.test(req.url)) {
    req.headers.host = 'api.openbeerdatabase.com';
    proxy.web(req, res);
  } else {
    next();
  }
};
