import { readFile } from "fs";


const { textPath, shiftValue } = {
  textPath: process.argv[2],
  shiftValue: parseInt(process.argv[3]) || -1
}

const alphabets: Array<string> = [];

for (let i = 0; i < 26; i++) {
  alphabets.push(String.fromCharCode(i + 65));
}

function alphabetShifter(alphabets: Array<string>, shiftValue: number) {
  const shiftedAlphabets: Array<string> = [...alphabets];
  for (let i = 0; i < shiftValue; i++) {
    shiftedAlphabets.push(shiftedAlphabets[0]);
    shiftedAlphabets.shift();
  }
  return shiftedAlphabets
}

function decoder(alphabet: Array<string>, shiftedAlphabet: Array<string>, text: string) {
  text = text.toUpperCase();
  let resultText: Array<string> = []
  for (const iterator of text) {
    if (alphabet.indexOf(iterator) == -1) {
      resultText.push(iterator);
    } else {
      resultText.push(shiftedAlphabet[alphabet.indexOf(iterator)]);
    }
  }
  return resultText.join("");
}



readFile(textPath, "utf-8", (err, text) => {
  if (err) {
    throw err
  } else {
    if (shiftValue == -1) {
      const shortText: string = text.split(" ")[0];
      for (let i = 0; i < 26; i++) {
        console.log("Shift value: " + i, decoder(alphabets, alphabetShifter(alphabets, i), shortText));
      }
    }
    else
      console.log(decoder(alphabets, alphabetShifter(alphabets, shiftValue), text));

  }
});