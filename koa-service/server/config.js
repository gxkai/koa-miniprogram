const env = process.env
const appKey = env.APP_KET || 'wx5cfb24d00805ef8b'
const appSecret = env.APP_SECRET || '3ddcf56373be4c79865173813d3f367b'
const nodeEnv = env.NODE_ENV
let db = {
  name: 'mongodb://139.196.102.55:27017/xcx'
}
if (nodeEnv === 'production') {
  db = {
    name: 'mongodb://139.196.102.55:27017/xcx',
  }
}

module.exports = {
  appKey,
  appSecret,
  db
}
