function foo(x) {
  if (x <= 0) return false;
  if (x === 1) return true;
  if (x === 2) return false;

  let a = false;
  let b = true;
  for (let i = 3; i <= x; i++) {
    let temp = a || b;
    a = b;
    b = temp;
  }
  return b;
}
