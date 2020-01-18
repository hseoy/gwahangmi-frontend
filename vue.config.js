const path = require("path");

module.exports = {
  // publicPath: "/gwahangmi-frontend/",
  outputDir: path.resolve(__dirname, "../gwahangmi/"),
  devServer: {
    proxy: {
      // proxyTable 설정
      "/api": {
        target: "http://localhost:3000/api",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
              @import "@/styles/_variables.scss";
            `
      }
    }
  }
};
