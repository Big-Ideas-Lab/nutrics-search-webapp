const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/get_random_nutrients',
    proxy({
      target: 'https://moveitdev-bfe5e.appspot.com',
      changeOrigin: true,
    })
  );
};
