/*
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-05-30 18:37:34
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-05-30 19:12:52
 * @FilePath: \vite-vue3-ts-01\.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
  }
}
