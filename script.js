function rot13(str) {
  let answer = "";
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < str.length; i++) {
    console.log(alphabet.indexOf(str[i]));
    if (alphabet.indexOf(str[i]) >= 13) {
      answer += alphabet[alphabet.indexOf(str[i]) - 13];
    } else if (alphabet.indexOf(str[i]) < 13 && alphabet.indexOf(str[i]) > -1) {
      answer += alphabet[alphabet.indexOf(str[i]) + 13];
    } else {
      answer += str[i];
    }
  }
  return answer;
}

rot13("SERR PBQR PNZC");
