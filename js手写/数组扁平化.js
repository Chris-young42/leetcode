function flat(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

function flatten(arr) {
  let result = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten[i]);
    } else {
      result.push(arr[i]);
    }
  }
}
