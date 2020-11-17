/*
 * @Descripttion:
 * @version:
 * @Author: 苏树兴
 * @Date: 2020-11-17 11:04:01
 * @LastEditors: 苏树兴
 * @LastEditTime: 2020-11-17 11:07:43
 */
module.exports = {
  presets: ['@babel/env', '@babel/typescript', '@babel/react'],
  plugins: ['@babel/plugin-transform-runtime', '@babel/proposal-class-properties'],
  env: {
    esm: {
      presets: [
        [
          '@babel/env',
          {
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            useESModules: true,
          },
        ],
      ],
    },
  },
};
