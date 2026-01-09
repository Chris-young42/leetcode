Array.prototype.Myreduce = function (callback, initialValue) {
  let accumulator = initialValue ?? this[0];
  let startIndex = initialValue === undefined ? 1 : 0;
  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator
};
