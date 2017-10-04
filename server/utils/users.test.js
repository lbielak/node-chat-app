const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
	var users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1',
			name: 'Thanh',
			room: 'Monkey Room'
		}, {
			id: '2',
			name: 'Linh',
			room: 'Lion Room'
		}, {
			id: '3',
			name: 'My',
			room: 'Monkey Room'
		}];
	});

	it('should add new user', () => {
		var users = new Users();
		var user = {
			id: '123',
			name: 'Thanh',
			room: 'Monkey room'
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
		var userId = '111';
		var user = users.removeUser(userId);

		expect(user).toNotExist();
		expect(users.users.length).toBe(3);
	});

	it('should find user', () => {
		var userId = '2';
		var user = users.getUser(userId);

		expect(user.id).toBe(userId);
	});

	it('should not find user', () => {
		var userId = '87';
		var user = users.getUser(userId);

		expect(user).toNotExist();
	});

	it('should return names for Monkey Room', () => {
		var userList = users.getUserList('Monkey Room');

		expect(userList).toEqual(['Thanh', 'My']);
	});

	it('should return names for Lion Room', () => {
		var userList = users.getUserList('Lion Room');

		expect(userList).toEqual(['Linh']);
	});	
});