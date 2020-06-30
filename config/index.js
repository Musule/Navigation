'use strict'

const path = require('path')

module.exports = {
  dev: {

        assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

        host: 'localhost',     port: 8088,     autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, 
    
    /**
     * Source Maps
     */

        devtool: 'cheap-module-eval-source-map',

                cacheBusting: true,

    cssSourceMap: true
  },

  build: {
        index: path.resolve(__dirname, '../dist/index.html'),

        assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: true,
        devtool: '#source-map',

                    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

                    bundleAnalyzerReport: process.env.npm_config_report
  }
}
