/*
 * @Descripttion:
 * @version:
 * @Author: 苏树兴
 * @Date: 2020-11-17 10:55:42
 * @LastEditors: 苏树兴
 * @LastEditTime: 2020-11-17 10:55:52
 */
const path = require('path');

exports.onCreateWebpackConfig = (args) => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        'nice-ui/lib': path.resolve(__dirname, '../components/'),
        'nice-ui/esm': path.resolve(__dirname, '../components/'),
        'nice-ui': path.resolve(__dirname, '../components/'),
      },
    },
  });
};
