// callbackFn.call is used to invoke the callback function with a specific `this` context and arguments.
// thisArg is the value to use as `this` when executing callbackFn. If thisArg is not provided, it defaults to undefined.

/**
 * @template T, U
 * @param { (value: T, index: number, array: Array<T>) => U } callbackFn
 * @param {any} [thisArg]
 * @return {Array<U>}
 */
Array.prototype.myMap = function (callbackFn, thisArg) {
  if (typeof callbackFn !== "function" || !callbackFn || !callbackFn.apply) {
    throw TypeError("param callbackFn is not a callback funciton");
  }

  let result = [];
  const len = this.length;
  let index = 0;

  while (index < len) {
    const value = this[index];
    const isNotSparse = Object.hasOwn(this, index);
    const cbResult = callbackFn.call(thisArg, value, index, this);

    // Only existing indexes get visited; holes are preserved rather than
    // becoming explicit `undefined` entries.
    // result.push(cbResult); will push `undefined` for holes, which is not the expected behavior.
    if (isNotSparse) {
      result[index] = cbResult;
    }

    index++;
  }

  return result;
};
