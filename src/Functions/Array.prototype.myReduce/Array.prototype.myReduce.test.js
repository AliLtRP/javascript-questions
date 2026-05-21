import { describe, it, expect } from "vitest";
import "./Array.prototype.myReduce";

describe("Array.prototype.myReduce", () => {
  it("should sum all numbers in an array, without initialValue", () => {
    const numbers = [1, 2, 3, 4];
    const result = numbers.myReduce((acc, curr) => acc + curr);
    expect(result).toBe(10);
  });

  it("should sum all numbers in an array, with initialValue", () => {
    const numbers = [1, 2, 3, 4];
    const result = numbers.myReduce((acc, curr) => acc + curr, 10);
    expect(result).toBe(20);
  });

  it("should throw an error when reducing an empty array without initialValue", () => {
    const emptyArray = [];
    expect(() => emptyArray.myReduce((acc, curr) => acc + curr)).toThrow(Error);
  });

  it("should return the initialValue when reducing an empty array", () => {
    const emptyArray = [];
    const result = emptyArray.myReduce((acc, curr) => acc + curr, 10);
    expect(result).toBe(10);
  });

  it("should skip holes in the array", () => {
    const arrayWithHoles = [1, , 3, 4];
    const result = arrayWithHoles.myReduce((acc, curr) => acc + curr, 0);
    expect(result).toBe(8);
  });
});
