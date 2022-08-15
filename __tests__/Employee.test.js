const Employee = require('../lib/Employee');
const employee = new Employee('Jackson', '72113', 'jsal721@gmail.com');

test('test to see if we can get the constuctor values for the employee object', () => {
    expect(employee.name).toBe('Jackson');
    expect(employee.id).toBe('72113');
    expect(employee.email).toBe('jsal721@gmail.com');
});

test('test to see if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('Jackson');
});

test('test to see if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('72113');
});

test('test to see if we can get the email from the getEmail() method', () => {
    expect(employee.email).toBe('jsal721@gmail.com');
});

test('test to see if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});
