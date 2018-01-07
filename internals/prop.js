/* eslint-disable import/no-extraneous-dependencies */
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'
import base from './base'

const config = base

config.input = 'src/canvas_x.js'
config.output = {
  name: 'canvas_x',
  file: 'lib/canvas_x.js',
  format: 'umd' // amd,cjs,es,iife,umd - https://rollupjs.org/#big-list-of-options
}

config.plugins.push(
  replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
  uglify()
)
config.sourcemap = false
config.intro = ''
config.banner = ''
config.footer = ''

export default config
