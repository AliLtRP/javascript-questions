/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
  let result = "";

  args.flat().map((v) => {
    const eleType = typeof v;
    const isArray = Array.isArray(v);

    if (eleType === "string") {
      result += v + " ";
    } else if (eleType === "object" && !isArray && v !== null) {
      result += handleObj(v);
    } else if (isArray) {
      result += v.join(" ");
    } else if (eleType === "number" && Boolean(v)) {
      result += v + " ";
    }
  });

  return result.trim();
}

const handleObj = (v) => {
  if (typeof v === "object" && v === "null") {
    return "";
  }

  let result = "";
  Object.keys(v)?.map((objKey) => {
    const val = v[objKey];
    if (val) {
      result += objKey + " ";
    }
  });

  return result;
};
