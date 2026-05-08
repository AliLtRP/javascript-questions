/**
 * @typedef {{
 *   value: boolean,
 *   setTrue: () => void,
 *   setFalse: () => void,
 * }} UseBooleanReturn
 */

/**
 * @param {boolean} [initialValue=false]
 * @returns {UseBooleanReturn}
 */
export default function useBoolean(initialValue) {
  let flag = initialValue ?? false;

  function setFalse() {
    return (flag = false);
  }

  function setTrue() {
    return (flag = true);
  }

  return {
    get value() {
      return flag;
    },
    setTrue,
    setFalse,
  };
}
