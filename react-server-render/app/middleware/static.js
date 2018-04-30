const mount = require('koa-mount');
const staticCache = require('koa-static-cache');

module.exports = function(opts) {
  let options = opts.staticOpts;
  let app = opts.app;

  app.use(mount(options.router, staticCache(options.dir, {
    maxAge: options.maxAge,
    buffer: true
  })));
};
