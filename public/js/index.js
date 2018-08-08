var socket = io();

socket.on('connect', function() {
  console.log("Connected to server");

  // socket.emit('createMessage', {
  //   from: "Katie",
  //   text: "new msg",
  //   createdAt: "123"
  // });

});

socket.on('newMessage', function(msg) {
  console.log("new message: " , msg);
  document.body.innerHTML += JSON.stringify(msg, undefined, 2);
  document.body.innerHTML += "<div></div>";
});


socket.on('disconnect', function() {
  console.log("Disconnected to server");
});