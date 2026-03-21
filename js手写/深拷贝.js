let obj = {
  a: 1,
  b: {
    c: 2,
  },
};

function deepClone(obj, map = new Map()) {
  if (!(obj instanceof Object)) return obj;
  if (map.has(obj)) {
    return map.get(obj);
  }
  let newObj = Array.isArray(obj) ? [] : {};
  map.set(obj, newObj);
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key], map);
    }
  }
  return newObj;
}
function deepClone(obj, map = new Map()) {
  if (!(obj instanceof Object)) return obj;

  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);

  if (map.has(obj)) {
    return map.get(obj);
  }
  const newObj = Array.isArray(obj) ? [] : {};
  map.set(obj, newObj);

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = deepClone(obj[key], map);
    }
  }

  return newObj;
}
