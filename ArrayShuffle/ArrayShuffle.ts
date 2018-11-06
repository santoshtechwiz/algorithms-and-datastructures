export function arrayShuffle(arr: Array<number>): Array<number> {
  for (let i = 0; i < arr.length; i++) {
    let randIndex = randomNumber(0, arr.length - 1);
    let temp = arr[i];
    arr[i] = arr[randIndex];
    arr[randIndex] = temp;
  }

  return arr;
}

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
