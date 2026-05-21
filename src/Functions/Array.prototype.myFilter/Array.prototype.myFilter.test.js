import { expect } from "vitest";
import { describe, test } from "vitest";
import "./Array.prototype.myFilter.js";

describe("Array.prototype.myFilter", () => {
  test("filters even numbers", () => {
    const numbers = [1, 2, 3, 4, 5, 6];

    function isEven(number) {
      return number % 2 === 0;
    }

    const evenNumbers = numbers.myFilter(isEven);

    expect(evenNumbers).toEqual([2, 4, 6]);
  });

  test("passing not a callback funciton", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const isPrime = "not a function";

    expect(() => numbers.myFilter(isPrime)).toThrow(TypeError);
  });

  test("test with sparse array", () => {
    const sparseArray = [1, , 3, 4, 5, 6]; // sparse array length is 6

    function isOdd(number) {
      return number % 2 !== 0;
    }

    const oddNumbers = sparseArray.myFilter(isOdd);

    expect(oddNumbers).toEqual([1, 3, 5]);
  });
});
