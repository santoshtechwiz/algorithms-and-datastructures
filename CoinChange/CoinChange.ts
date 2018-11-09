export function coinChange(coins: Array<number>, amount: number): number {
  function helper(
    coins: Array<number>,
    amount: number,
    numberOfCoins: number
  ): number {
    if (amount < 0) return 0;
    if (amount === 0) return 1;
    if (numberOfCoins < 0 && amount > 0) return 0; // We don't have coins left!

    return (
      helper(coins, amount - coins[numberOfCoins], numberOfCoins) +
      helper(coins, amount, numberOfCoins - 1)
    );
  }
  return helper(coins, amount, coins.length - 1);
}

export function coinChange2(
  coins: Array<number>,
  amount: number,
  index: number
): number {
  if (amount < 0) return 0;
  if (amount === 0) return 1;
  let ways = 0;
  for (let i = index; i < coins.length; i++) {
    ways += coinChange2(coins, amount - coins[i], i);
    ways;
  }
  return ways;
}
export function coinChangeDP(coins: Array<number>, amount: number): number {
  let combinations: Array<number> = new Array<number>(amount + 1);
  combinations.fill(0);
  combinations[0] = 1;

  for (let coin of coins) {
    for (let i = 1; i < combinations.length; i++) {
      if (i >= coin) {
        combinations[i] += combinations[i - coin];
      }
    }
  }

  return combinations[amount];
}
