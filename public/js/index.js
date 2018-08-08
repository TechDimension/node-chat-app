var socket = io();


jQuery("#message-form").on("submit", function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'USER',
    text: jQuery('[name=message]').val()
  }, function () {

  });
});

socket.on('connect', function() {
  console.log("Connected to server");
});

socket.on('disconnect', function() {
  console.log("Disconnected to server");
});


socket.on('newMessage', function(message) {
  console.log("new message: " , message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);
  jQuery('#messages').append(li);

});




socket.emit('createMessage', {
  from: 'Frank',
  text: "Hi"
}, function (data) {
  console.log(`got: ${data}`);
});

