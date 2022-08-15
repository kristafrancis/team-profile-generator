const Manager = require("../lib/Manager");
const manager = new Manager('Jackson', '72113', 'jsal721@gmail.com', '721');

test('test to see if we can get the constuctor values for the manager object', () => {
    expect(manager.name).toBe('Jackson');
    expect(manager.id).toBe('72113');
    expect(manager.email).toBe('jsal721@gmail.com');
    expect(manager.officeNumber).toBe('721');
});

test('test to see if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('Jackson');
});

test('test to see if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('72113');
});

test('test to see if we can get the email from the getEmail() method', () => {
    expect(manager.email).toBe('jsal721@gmail.com');
});

test('test to see if we get the office number from the getOfficeNumber() method'), () => {
    expect(manager.getOfficeNumber()).toBe('821');
}

test('test to see if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});
