const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      // 백엔드 주소
      target: "http://34.22.74.6:8080",
      changeOrigin: true,
    })
  );
};