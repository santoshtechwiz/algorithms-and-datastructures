function ceaser(str: string, key: number) {
  let result = "";
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result += str[i];
    } else {
      var charCode = str.charCodeAt(i) - 97 + key;
      if (charCode > 26) {
        charCode = charCode - 26;
      }
      result += alphabets[charCode];
    }
  }
  console.log(result);
}
