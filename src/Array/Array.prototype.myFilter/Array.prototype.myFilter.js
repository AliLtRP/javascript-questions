/**
 * @template T
 * @param {(value: T, index: number, array: Array<T>) => boolean} callbackFn
 * @param {unknown} [thisArg]
 * @returns {Array<T>}
 */
Array.prototype.myFilter = function (callbackFn, thisArg) {
  if (typeof callbackFn !== "function" || !callbackFn || !callbackFn.apply) {
    throw new TypeError(`${callbackFn} is not a function`);
  }

  const result = [];
  const len = this.length;
  let index = 0;

  while (index < len) {
    const value = this[index];
    const isSparse = Object.hasOwn(this, index);
    const cbResult = callbackFn.call(thisArg, value, index, this);

    if (isSparse && cbResult) {
      result.push(value);
    }

    index++;
  }

  return result;
};
