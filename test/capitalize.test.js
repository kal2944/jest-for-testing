const capitalize = require('../modules/capitalize');

describe("capitalize tests", () => {
  test("capitalize 1", () => {
    //Arrange
    const string = 'kalkidan';

    //Act
    const result1 = capitalize(string);

    //Assert
    expect(result1).toEqual('Kalkidan');
  });
});