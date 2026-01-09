Array.prototype.MyMap = function (callback, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result[i] = callback.call(thisArg, this[i], i, this);
  }
  return result;
};
