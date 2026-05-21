import { describe, expect, test } from "vitest";
import "./Array.prototype.myMap";

const identity = (element) => element;
const square = (element) => element * element;

describe("Array.prototype.myMap", () => {
  test("identity", () => {
    expect([10].myMap(identity)).toEqual([10]);
    expect([10, 20].myMap(identity)).toEqual([10, 20]);
  });

  test("square", () => {
    expect([-4].myMap(square)).toEqual([16]);
    expect([5].myMap(square)).toEqual([25]);
  });
});
