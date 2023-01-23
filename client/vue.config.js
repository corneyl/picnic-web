const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../dist'),
    publicPath: './',

    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: true
        }
    },

    configureWebpack: {
        devtool: 'source-map'
    }
};
