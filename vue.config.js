module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/styles/_variables.scss";',
      },
    },
  },
  outputDir: 'docs',
  productionSourceMap: false,
  publicPath: '/',
};
