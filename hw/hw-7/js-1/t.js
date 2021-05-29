let q = 5;
let w = 12;
let e = 3;
let total = 0;

if ((q > w && q > e) || (q > w && q < e) || (q < w && q > e)) {
  total += q;
}
if ((w > q && w > e) || (w > q && w < e) || (w < q && w > e)) {
  total += w;
}
if ((e > q && e > w) || (e > q && e < w) || (e < q && e > w)) {
  total += e;
}

console.log(total);
