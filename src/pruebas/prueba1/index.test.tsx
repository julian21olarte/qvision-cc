import { reverse, reverseIterative } from "./index";

const text = "Hola mundo";
const reverseText = "odnum aloH";
describe("Test reverse function", () => {
  test("Test reverse function working well with string", () => {
    const result = reverse(text);
    expect(result).toBe(reverseText);
  });

  test("Test reverse function working well with empty string", () => {
    const result = reverse("");
    expect(result).toBe("");
  });
});

describe("Test reverseIterative function", () => {
  test("Test reverseIterative function working well with string", () => {
    const result = reverseIterative(text);
    expect(result).toBe(reverseText);
  });

  test("Test reverseIterative function working well with empty string", () => {
    const result = reverseIterative("");
    expect(result).toBe("");
  });
});
