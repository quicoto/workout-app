module.exports = {
  css: {
    loaderOptions: {
      css: {
        data: [
          '@import "@/styles/_common.scss";',
          '@import "@/styles/_variables.scss";',
        ],
      },
    },
  },
  outputDir: 'docs',
  productionSourceMap: false,
  publicPath: '/',
};
