import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    createProxyMiddleware(["/TIL", "/project"], {
      target: "http://localhost:3002",
      changeOrigin: true,
    })
  );
};
