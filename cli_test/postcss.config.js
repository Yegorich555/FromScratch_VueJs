module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-normalize": {
      forceImport: true, //this option doesn't work with vue-style-loader properly - it pasts css twice: 'simple' and 'with scoped' and only after css of App.vue module
      allowDuplicates: false
    }
  }
};
