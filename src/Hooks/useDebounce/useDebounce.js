/**
 * @param {(...args: Array<unknown>) => unknown} func
 * @param {number} wait
 * @returns {(...args: Array<unknown>) => void}
 */
export default function debounce(func, wait) {
  let timer = null;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.call(this, ...args);
    }, wait);
  };
}
