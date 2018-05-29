const { defaults } = require('jest-config');

module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "/test/.+\\.test\\.[jt]sx?$",
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx']
}
