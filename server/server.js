const http = require('http')
const SocketServer = require('socket.io')
const { Message } = require('./models')
const app = require('./app')
const { port, SOCKET_EVENTS } = require('./configs')

const server = http.createServer(app)

const cors = {
  origin: '*'
}

const io = SocketServer(server, { cors })

io.on('connection', socket => {
  console.log('connection to socket')

  socket.on(SOCKET_EVENTS.NEW_MESSAGE, async newMessage => {
    try {
      const savedMessage = await Message.create(newMessage)
      io.emit(SOCKET_EVENTS.NEW_MESSAGE, savedMessage)
    } catch (err) {
      io.emit(SOCKET_EVENTS.NEW_MESSAGE_ERROR, err)
    }
  })

  socket.on('disconnect', reason => {
    console.log(reason)
  })
})

server.listen(port, () => {
  console.log('i am alive')
})
