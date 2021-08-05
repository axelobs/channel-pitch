const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://wispy-sun-870.staging.oregon.platform-os.com/',
      secure: false,
      changeOrigin: true,
    })
  );
};