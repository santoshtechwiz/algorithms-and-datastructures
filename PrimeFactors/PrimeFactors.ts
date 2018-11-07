export function primeFactors(num: number): Array<number> {
  let result: Array<number> = [];
  if (num <= 1) {
    return result;
  }

  let i = 2;
  while (num > 1) {
    while (num % i == 0) {
      result.push(i);
      num = num / i;
    }
    i++;
  }
  return result;
}
