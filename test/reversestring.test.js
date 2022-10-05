const reverseString = require('../modules/reversestring');

describe("reverse string tests", () => {
    test("reverse string", () => {
      //Arrange
      const string1 = "wow";
  
      //Act
      const result1 = reverseString(string1);
  
      //Assert
      expect(result1).toBe("mom");
    });
  });