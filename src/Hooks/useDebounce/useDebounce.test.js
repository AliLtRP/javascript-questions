import { describe, it, vitest, expect } from "vitest";
import debounce from "./useDebounce";

describe("useDebounce", () => {
  it("should debounce the function calls", () => {
    vitest.useFakeTimers();
    const func = vitest.fn();

    const debounced = debounce(func, 100);

    expect(debounced).toBeInstanceOf(Function);

    debounced("first call");
    debounced("second call");

    vitest.advanceTimersByTime(50);
    expect(func).toHaveBeenCalledTimes(0);

    vitest.advanceTimersByTime(60);
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith("second call");

    vitest.useRealTimers();
  });
});
