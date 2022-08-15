const Intern = require("../lib/Intern");

const intern = new Intern('Jackson', '72113', 'jsal721@gmail.com', 'UCF');

test('test to see if we can get the constuctor values for the manager object', () => {
    expect(intern.name).toBe('Jackson');
    expect(intern.id).toBe('72113');
    expect(intern.email).toBe('jsal721@gmail.com');
    expect(intern.school).toBe('UCF');
});

test('test to see if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('Jackson');
});

test('test to see if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('72113');
});

test('test to see if we can get the email from the getEmail() method', () => {
    expect(intern.email()).toBe('jsal721@gmail.com');
});

test('test to see if we get the school from the getSchool() method', () => {
    expect(intern.school()).toBe('UCF');
});

test('test to see if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('intern');
});
