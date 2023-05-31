import { maxNum, maxNumIterative } from "./index";

describe("Test maxNum function", () => {
  test("Test maxNum function working well with array of numbers", () => {
    const result = maxNum([1, 3, 5, 2, 4]);
    expect(result).toBe(5);
  });

  test("Test maxNum function working well with empty array", () => {
    const result = maxNum([]);
    expect(result).toBe(-Infinity);
  });
});

describe("Test maxNumIterative function", () => {
  test("Test reverseIterative function working well with array of numbers", () => {
    const result = maxNumIterative([1, 3, 5, 2, 4]);
    expect(result).toBe(5);
  });

  test("Test reverseIterative function working well with empty array", () => {
    const result = maxNumIterative([]);
    expect(result).toBe(-Infinity);
  });
});
