module.exports = {
  port: 5000,
  db: {
    development: {
      hostName: 'localhost',
      port: 27017,
      dbName: 'feChat2'
    }
  },
  SOCKET_EVENTS: {
    NEW_MESSAGE: 'NEW_MESSAGE',
    NEW_MESSAGE_ERROR: 'NEW_MESSAGE_ERROR'
  }
}
