var socket = io();

socket.on('connect', function() {
  console.log("Connected to server");

  socket.emit('createEmail', {
    to: 'jen@example.com',
    text: "hey, its me"
  });

  socket.emit('createMessage', {
    from: "Katie",
    text: "new msg",
    createdAt: "123"
  });

});

socket.on('newMessage', function(msg) {
  console.log("new message: " , msg);
  document.body.innerHTML += JSON.stringify(msg, undefined, 2);
  document.body.innerHTML += "<div></div>";
});


socket.on('disconnect', function() {
  console.log("Disconnected to server");
});

socket.on('newEmail', function(email) {
  console.log("New email: " , email);
});