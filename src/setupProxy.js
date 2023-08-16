const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      // 백엔드 주소
      target: "https://34.64.161.242:8443",
      changeOrigin: true,
      rejectUnauthorized: false ,
    })
  );
};