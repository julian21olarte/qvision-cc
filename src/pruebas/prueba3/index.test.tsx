import { sumOdd, sumOddIterative } from "./index";

describe("Test sumOdd function", () => {
  test("Test sumOdd function working well with array of numbers", () => {
    const result = sumOdd([1, 2, 3, 4, 5, 6]);
    expect(result).toBe(12);
  });

  test("Test sumOdd function working well with empty array", () => {
    const result = sumOdd([]);
    expect(result).toBe(0);
  });
});

describe("Test sumOddIterative function", () => {
  test("Test sumOddIterative function working well with array of numbers", () => {
    const result = sumOddIterative([1, 2, 3, 4, 5, 6]);
    expect(result).toBe(12);
  });

  test("Test sumOddIterative function working well with empty array", () => {
    const result = sumOddIterative([]);
    expect(result).toBe(0);
  });
});
