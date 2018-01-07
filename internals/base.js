import babel from 'rollup-plugin-babel'
import cssnext from 'postcss-cssnext'
import postCssModules from 'postcss-modules'
import postCss from 'rollup-plugin-postcss'
import commonjs from 'rollup-plugin-commonjs' // common转 Es5
import resolve from 'rollup-plugin-node-resolve' // 解决外部模块问题
import progress from 'rollup-plugin-progress'
import image from 'rollup-plugin-image'

const cssExportMap = {}

export default {
  cache: true,
  external: [
    'react'
  ],
  globals: {
    jquery: '$'
  },
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs(),
    image(),
    postCss({
      plugins: [
        cssnext({ warnForDuplicates: false }),
        // postCssModules({
        //   getJSON(id, exportTokens) {
        //     cssExportMap[id] = exportTokens
        //   }
        // })
      ],
      // css Module
      getExportNamed: false, // Default false
      getExport(id) {
        return cssExportMap[id]
      },
      sourceMap: true,
      // extract: 'dist/main.css', // 单独导出样式
      extensions: ['.css', '.pcss']
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    progress({
      clearLine: false // default: true
    })
  ],
  // map
  sourcemap: true,
  // 备注
  intro: '',
  banner: '',
  footer: ''
}
