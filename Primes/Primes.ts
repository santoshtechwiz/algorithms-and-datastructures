export function primes(n: number): Array<number> {
  const primes = new Array(n);
  for (let i = 0; i <= n; i++) {
    primes[i] = true;
  }
  const result = new Array();
  primes[0] = false;
  primes[1] = false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    for (let j = 2; j < n; j++) {
      primes[i * j] = false;
    }
  }
  primes.reduce((prevPrimes, isPrime, i) => {
    if (isPrime) {
      result.push(i);
    }
  });
  return result;
}
