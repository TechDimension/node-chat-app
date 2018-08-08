var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');


describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'some message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA("number");
    expect(message).toInclude({from, text });


  });
}); 


describe('generateLocationMessage', () => {
  it('should generate correct location message object', () => {
    var from = "Matt";
    var latitude = 15;
    var longitude = 19;
    var url = 'https://www.google.com/maps?q=15,19';

    var locationMessage = generateLocationMessage(from, latitude, longitude);

    expect(locationMessage.createdAt).toBeA("number");
    expect(locationMessage.url).toEqual(url);
    expect(locationMessage).toInclude({from, url});
  })
});