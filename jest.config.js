const { join } = require('path')

module.exports = {
  rootDir: join(__dirname, '/src'),
  setupFilesAfterEnv: ['<rootDir>/../setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
}
