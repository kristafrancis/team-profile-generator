const Engineer = require("../lib/Engineer");

const engineer = new Engineer('Jackson', '72113', 'jsal721@gmail.com', 'jsal721');

test('test to see if we can get the constuctor values for the engineer object', () => {
    expect(engineer.name).toBe('Jackson');
    expect(engineer.id).toBe('72113');
    expect(engineer.email).toBe('jsal721@gmail.com');
    expect(engineer.github).toBe('jsal721');
});

test('test to see if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('Jackson');
});

test('test to see if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('72113');
});

test('test to see if we can get the email from the getEmail() method', () => {
    expect(engineer.email()).toBe('jsal721@gmail.com');
});

test('test to see if we get the github user name from the getGitHub() method', () => {
    expect(engineer.github()).toBe('jsal721');
});

test('test to see if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('engineer');
});
