/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {U}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  let acc = initialValue;
  let statingIndex = 0;

  if (arguments.length < 2) {
    if (this.length === 0) {
      throw new Error("Empty array with no initialValue");
    }
    acc = this[0];
    statingIndex = 1;
  }

  for (let i = statingIndex; i < this.length; i++) {
    if (Object.hasOwn(this, i)) {
      acc = callbackFn(acc, this[i], i, this);
    }
  }

  return acc;
};
