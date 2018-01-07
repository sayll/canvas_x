/* eslint-disable import/no-extraneous-dependencies */
import replace from 'rollup-plugin-replace'

import base from './base'

const config = base

config.input = 'test/main.js'
config.output = {
  name: 'cx',
  file: 'dist/main.js',
  format: 'umd' // amd,cjs,es,iife,umd - https://rollupjs.org/#big-list-of-options
}

config.plugins.push(
  replace({ 'process.env.NODE_ENV': JSON.stringify('development') })
)
config.sourcemap = true

export default config
