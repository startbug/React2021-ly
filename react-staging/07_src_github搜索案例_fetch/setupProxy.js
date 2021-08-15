const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    //当请求的url前缀为/api1时，会触发该代理配置
    proxy("/api1", {
      target: "http://localhost:5000", //请求转发的目标服务器地址
      changeOrigin: true, //控制服务器收到的响应头中host字段的值
      pathRewrite: { "^/api1": "" },
    })
  );
};
