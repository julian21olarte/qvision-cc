import { sortByProp, sortByPropIterative } from "./index";

const objects = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Pedro", edad: 20 },
  { nombre: "María", edad: 30 },
];

const sortObjects = [
  { nombre: "Pedro", edad: 20 },
  { nombre: "Ana", edad: 25 },
  { nombre: "María", edad: 30 },
];
describe("Test sortByProp function", () => {
  test("Test sortByProp function working well with array of objects", () => {
    const result = sortByProp(objects);
    expect(result).toStrictEqual(sortObjects);
  });

  test("Test sortByProp function working well with empty array", () => {
    const result = sortByProp([]);
    expect(result).toStrictEqual([]);
  });
});

describe("Test sortByPropIterative function", () => {
  test("Test sortByPropIterative function working well with array of objects", () => {
    const result = sortByPropIterative(objects);
    expect(result).toStrictEqual(sortObjects);
  });

  test("Test sortByPropIterative function working well with empty array", () => {
    const result = sortByPropIterative([]);
    expect(result).toStrictEqual([]);
  });
});
