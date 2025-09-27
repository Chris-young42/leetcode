/**
 * @param {number} n
 * @return {number}
 */
const N = 10000;
const f = Array(N + 1).fill(Infinity);
f[0] = 0;
for (let i = 1; i * i < N; i++) {
  for (let j = i * i; j <= N; j++) {
    f[j] = Math.min(f[j], f[j - i * i] + 1);
  }
}
var numSquares = function (n) {
    return f[n]
};
