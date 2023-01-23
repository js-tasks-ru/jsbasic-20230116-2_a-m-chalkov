function factorial(n) {
  let f = n;
  if (n == 0) {
      f = 1;
  } else {
      while (n > 0) {
          f = f * n;
          n = n - 1;
      }
  }
  return f;
}
