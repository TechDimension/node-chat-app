const expect = require('expect');
const {Users} = require('./users.js');

describe ('Users', () => {
  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Curse'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Curse'
    }, {
      id: '3',
      name: 'Ben',
      room: 'Node Curse'
    }];
  });
  it ('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Matthew',
      room: 'Tech'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });


  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it ('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);
    expect(user.id).toBe(userId);
  });

  it ('should not find a user', () => {
    var userId = '99';
    var user = users.getUser(userId);
    expect(user).toNotExist();
  });
  it('should return names for node course', () => {
    var userList = users.getUserList('Node Curse');
    expect(userList).toEqual(['Mike', 'Ben']);
  });
  it('should return names for react course', () => {
    var userList = users.getUserList('React Curse');
    expect(userList).toEqual(['Jen']);
  });

});