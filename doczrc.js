/*
 * @Descripttion:
 * @version:
 * @Author: 苏树兴
 * @Date: 2020-11-16 16:24:24
 * @LastEditors: 苏树兴
 * @LastEditTime: 2020-11-17 11:23:53
 */
export default {
  files: './components/**/*.{md,markdown,mdx}', // 识别的文件后缀
  dest: 'doc-site', // 打包出来的文件目录名
  title: 'nice-ui', // 站点标题
  typescript: true, // 组件源文件是通过typescript开发，需要打开此选项
};
