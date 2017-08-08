const route = require('koa-better-route');
const fetch = require('node-fetch');

module.exports = class NginxMiddleware {
  static create() {
    return new this();
  }

  middleware() {
    return route.get('/nginx', async function (ctxt){
      let res = await fetch('http://nginx');
      ctxt.body = await res.text();
    });
  }
}
