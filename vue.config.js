const path = require("path");
const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "./build",
  devServer: {
    proxy: {
      "^/api": {
        target: "http://127.0.0.1:4523/mock/1877124",
        pathRewrite: {
          "^/api": "",
        },
        ws: true,
        changeOrigin: true,
      },
    },
  },
  // publicPath: "./"
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       views: '@/views'
  //     }
  //   }
  // }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("views", "@/views");
  },
  configureWebpack: {
    plugins: [
      require("unplugin-vue-components/webpack")({
        /* options */
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
});
