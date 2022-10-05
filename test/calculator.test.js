const Calculator = require('../modules/calculator');

describe("calculator sum tests", () => {
  test("calculator sum 1", () => {
    //Arrange
    const a = 4;
    const b = 5;

    //Act
    const result1 = Calculator.add(a, b);

    //Assert
    expect(result1).toEqual(9);
  });

  test("calculator sum 2", () => {
    //Arrange
    const a = -15;
    const b = 5;

    //Act
    const result2 = Calculator.add(a, b);

    //Assert
    expect(result2).toEqual(-10);
  });

  test("calculator sum 3", () => {
    //Arrange
    const a = 2.2;
    const b = 6.6;

    //Act
    const result3 = Calculator.add(a, b);

    //Assert
    expect(result3).toBeCloseTo(8.8);
  });
});

describe("calculator subtract tests", () => {
  test("calculator subtract 1", () => {
    //Arrange
    const a = 9;
    const b = 4;

    //Act
    const result1 = Calculator.subtract(a, b);

    //Assert
    expect(result1).toEqual(5);
  });

  test("calculator subtract 2", () => {
    //Arrange
    const a = -9;
    const b = 13;

    //Act
    const result2 = Calculator.subtract(a, b);

    //Assert
    expect(result2).toEqual(-22);
  });

  test("calculator subtract 3", () => {
    //Arrange
    const a = -6.6;
    const b = 2.2;

    //Act
    const result3 = Calculator.subtract(a, b);

    //Assert
    expect(result3).toBeCloseTo(-8.8);
  });
});

describe("calculator multiply tests", () => {
  test("calculator multiply 1", () => {
    //Arrange
    const a = 4;
    const b = 5;

    //Act
    const result1 = Calculator.multiply(a, b);

    //Assert
    expect(result1).toEqual(20);
  });

  test("calculator multiply 2", () => {
    //Arrange
    const a = -6;
    const b = 4;

    //Act
    const result2 = Calculator.multiply(a, b);

    //Assert
    expect(result2).toEqual(-24);
  });

  test("calculator multiply 3", () => {
    //Arrange
    const a = 6.6;
    const b = 2.2;

    //Act
    const result3 = Calculator.multiply(a, b);

    //Assert
    expect(result3).toBeCloseTo(14.52);
  });
});

  describe("calculator divide tests", () => {
    test("calculator divide 1", () => {
      //Arrange
      const a = 10;
      const b = 2;
  
      //Act
      const result1 = Calculator.divide(a, b);
  
      //Assert
      expect(result1).toEqual(5);
    });
  
    test("calculator divide 2", () => {
      //Arrange
      const a = -6;
      const b = 2;
  
      //Act
      const result2 = Calculator.divide(a, b);
  
      //Assert
      expect(result2).toEqual(-3);
    });
  
    test("calculator divide 3", () => {
      //Arrange
      const a = 6.6;
      const b = 2;
  
      //Act
      const result3 = Calculator.divide(a, b);
  
      //Assert
      expect(result3).toBeCloseTo(3.3);
    });
});