module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/styles/_variables.scss";',
      },
    },
  },
  outputDir: 'docs',
  productionSourceMap: false,
  publicPath: '/workout-app/',
};
