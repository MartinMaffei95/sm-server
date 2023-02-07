module.exports = (io: any) => {
  io.on('connection', (socket: any) => {
    console.log('connection', socket.id);

    // socket.join("global chat")

    socket.on('disconnect', () => {
      //   io.emit('new user', usersConnected);
    });
  });
};
