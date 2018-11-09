export function firstNonRepatingChar(input: string): string {
  if (!input) return null;
  let count: { [key: string]: number } = {};

  for (let char of input) {
    count[char] = count[char] + 1 || 1;
  }
  count;
  for (let char in count) {
    char;
    if (count[char] === 1) return char;
  }
}
