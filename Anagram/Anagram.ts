export function isAnagram(stringA: string, stringB: string): boolean {
  let str1 = stringA.replace(/\s+/, "");
  let str2 = stringB.replace(/\s+/, "");
  var counts = [];
  if (str1.length !== str2.length) {
    return false;
  }

  for (var i = 0; i < str1.length; i++) {
    var index = str1.charCodeAt(i) - 97;
    counts[index] = (counts[index] || 0) + 1;
  }

  for (var i = 0; i < str2.length; i++) {
    var index = str2.charCodeAt(i) - 97;
    if (!counts[index]) {
      return false;
    } else {
      counts[index]--;
    }
  }
  return true;
}
