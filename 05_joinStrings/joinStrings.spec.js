const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is John', () => {
    expect(values.firstName).toEqual('John');
  });
  test('lastName is Teremi', () => {
    expect(values.lastName).toEqual('Teremi');
  });
  test('thisYear is 2025', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 1990', () => {
    expect(values.birthYear).toEqual(1990);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is John Teremi and I am 35 years old.');
  });
});

describe('step 3', () => {
  test('fullName is John Teremi', () => {
    expect(values.fullName).toEqual('John Teremi');
  });
  test('age is 35', () => {
    expect(values.age).toEqual(35);
  });
});
