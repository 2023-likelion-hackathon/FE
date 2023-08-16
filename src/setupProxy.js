const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      // 백엔드 주소
      target: "https://mzero-server-dd99abc65c9c.herokuapp.com/",
      changeOrigin: true,
    })
  );
};