const Calculator = require ('./calculator');

const calc = new Calculator();

describe('check add functionality', function () {
  test.each([
    [9, 1, 10],
    [13, 25, 38],
    [2, 100, 102],
  ]) (`should check addition of pozitive numbers`, async(a, b, expected) => {
    let result = calc.add(a, b);
    expect(result).toEqual(expected);
  })

  test('should check addition of negative numbers', async () => {
    let result = calc.add(-9, -1, -7);
    expect(result).toEqual(-17);
  });
  
  test('should check addition with negative numbers', async () => {
    let result = calc.add(3, 1, -8);
    expect(result).toEqual(-4);
  });

  test('should check addition of pozitive fractional numbers', async () => {
    let result = calc.add(5.3, 1.1, 7.8);
    expect(result).toBeCloseTo(14.2);
  });

  test('should check addition of negative fractional numbers', async () => {
    let result = calc.add(-9.4, -8.11, -99.1);
    expect(result).toBeCloseTo(-116.61);
  });

  test('should check addition of BigInt numbers', async () => {
    let result = calc.add(1253444579594321131, 987543444111365423);
    expect(result).toEqual(2240988023705686500);
  });
  
  test('should check addition with 0', async () => {
    let result = calc.add(10, 3, 0);
    expect(result).toEqual(13);
  });

  test('should check addition with NaN', async () => {
    let result = calc.add(8, NaN, 3);
    expect(result).toBeNaN();
  });
});

describe('check multiply functionality', function () {
  test.each([
    [9, 1, 9],
    [13, 5, 65],
    [2, 4, 8],
  ]) (`should check multiplication of pozitive numbers`, async(a, b, expected) => {
    let result = calc.multiply(a, b);
    expect(result).toEqual(expected);
  })

  test('should check multiplication of negative numbers', async () => {
    let result = calc.multiply(-3, -6, -8);
    expect(result).toEqual(-144);
  });

  test('should check multiplication with negative numbers', async () => {
    let result = calc.multiply(-1, 2, 5);
    expect(result).toEqual(-10);
  });

  test('should check multiplication of pozitive fractional numbers', async () => {
    let result = calc.multiply(0.25, 9.99);
    expect(result).toBeCloseTo(2.4975);
  });

  test('should check multiplication of negative fractional numbers', async () => {
    let result = calc.multiply(-0.5, -17.66);
    expect(result).toBeCloseTo(8.83);
  });

  test('should check multiplication with 0', async () => {
    let result = calc.multiply(9, 0);
    expect(result).toEqual(0);
  });

  test('should check multiplication with BigInt numbers', async () => {
    let result = calc.multiply(92345678, 912345674);
    expect(result).toEqual(84251179835896982);
  });
});

describe('check subtraction functionality', function () {
  
  test.each([
    [20, 15, 5],
    [55, 65, -10],
    [100, 99, 1],
  ]) (`should check subtraction of positive numbers`, async(a, b, expected) => {
    let result = calc.subtraction(a, b);
    expect(result).toEqual(expected);
  })
  
  test('should check subtraction of negative numbers', async () => {
    let result = calc.subtraction(-20, -5);
    expect(result).toEqual(-15);
  });
  
  test('should check subtraction of fractional numbers with pozitive result', async () => {
    let result = calc.subtraction(99.99, 8.66);
    expect(result).toBeCloseTo(91.33);
  });

  test('should check subtraction of negative fractional numbers', async () => {
    let result = calc.subtraction(-28.5, -5.8);
    expect(result).toEqual(-22.7);
  });

  test('should check subtraction of fractional numbers with negative result', async () => {
    let result = calc.subtraction(9.78, 11.22);
    expect(result).toBeCloseTo(-1.44);
  });
});


describe('check divide functionality', function () {
  
  test.each([
    [20, 5, 4],
    [55, 5, 11],
    [100, 1, 100],
  ]) (`should check division of positive numbers`, async(a, b, expected) => {
    let result = calc.divide(a, b);
    expect(result).toEqual(expected);
  });

  test('should check division of negative numbers', async () => {
    let result = calc.divide(-30, -6);
    expect(result).toEqual(5);
  });

  test('should check division of positive numbers with remander', async () => {
    let result = calc.divide(10, 3);
    expect(result).toBeCloseTo(3.33);
  });

  test('should check division of negative numbers with remander', async () => {
    let result = calc.divide(-15, -4);
    expect(result).toBeCloseTo(3.75);
  });

  test('should check division of fractional number', async () => {
    let result = calc.divide(22.11, 3.99);
    expect(result).toBeCloseTo(5.54);
  });

  test('should check division by 0', async () => {
    let result = calc.divide(20, 0);
    expect(result).toThrow(Error);
  });
});

describe('check exponentiation functionality', function () {
  
  test.each([
    [3, 9],
    [11, 121],
    [1, 1],
  ]) (`should check exponentiation of pozitive numbers`, async(a, expected) => {
    let result = calc.exponentiation(a);
    expect(result).toEqual(expected);
  });

  test('should check exponentiation of negative numbers', async () => {
    let result = calc.exponentiation(-5);
    expect(result).toEqual(25);
  });

  test('should check exponentiation of fractional pozitive numbers', async () => {
    let result = calc.exponentiation(15.5);
    expect(result).toEqual(240.25);
  });

  test('should check exponentiation of fractional negative numbers', async () => {
    let result = calc.exponentiation(-111.99);
    expect(result).toEqual(12541.7601);
  });
});


