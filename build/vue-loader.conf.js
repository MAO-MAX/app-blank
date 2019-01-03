'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap
const px2rem = require('postcss-plugin-px2rem')

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  postcss: function () {
    // rootValve 1rem所对应的px，适配方案的比例100; 换算公式= px/50*100 rem
    // propBlackList 属性黑名单，里面的属性不会被转换为rem
    return [px2rem({rootValue: 50, propBlackList: ['border']})]
  }
}
