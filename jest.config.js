/*
 * @Descripttion:
 * @version:
 * @Author: 苏树兴
 * @Date: 2020-11-17 11:11:41
 * @LastEditors: 苏树兴
 * @LastEditTime: 2020-11-17 11:11:42
 */
module.exports = {
  verbose: true,
  roots: ['<rootDir>/components'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '^components$': '<rootDir>/components/index.tsx',
    '^components(.*)$': '<rootDir>/components/$1',
  },
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/esm/', '/dist/'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
};
