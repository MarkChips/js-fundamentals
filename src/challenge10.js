#!/usr/bin/env node

/* We should be able to speed up encoding and decoding messages if we can run a program directly from the command line!

The command should take 3 arguments [cipher] [method] [file] and optionally take a [key]

##### Option 1
Running a script that will encrypt the text in `example.txt` using a letter-letter cipher might look like this:
```sh
$ ./cipher.js ll enc example.txt
```

##### Option 2
Using an executable command for a letter-number cipher might look like this:
```sh
$ cipher ln enc example.txt 104
```*/

// To run, type './challenge10.js ll dec example.txt' in the terminal.

const fs = require("fs");

class LetterNumberCipher {
  characters = ` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@£$%^&*()-_=+[]{};:\'"\\|,.<>/?\`~§±1234567890`;
  twoDigit(number) {
    const modulo = String(number % 100);
    return modulo.padStart(2, "0");
  }
  encrypt(str, n) {
    let encryptedStr = "";
    for (let i = 0; i < str.length; ++i) {
      encryptedStr += this.twoDigit(this.characters.indexOf(str[i]) + 1 + n);
    }
    return encryptedStr;
  }
  splitStringIntoPairs(inputString) {
    return String(inputString).match(/.{1,2}/g);
  }
  decrypt(encryption, key) {
    const modulo = key % 100;
    const byTwos = this.splitStringIntoPairs(encryption);
    let decryption = "";
    for (let i = 0; i < byTwos.length; ++i) {
      decryption += this.characters[(100 + (byTwos[i] - modulo - 1)) % 100];
    }
    return decryption;
  }
}

class LetterLetterCipher {
  characters = [
    ' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C',
    'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
    'X', 'Y', 'Z', '!', '@', '£', '$', '%', '^', '&',
    '*', '(', ')', '-', '_', '=', '+', '[', ']', '{',
    '}', ';', ':', "'", '"', '\\', '|', ',', '.', '<',
    '>', '/', '?', '`', '~', '§', '±', '1', '2', '3',
    '4', '5', '6', '7', '8', '9', '0',
  ];
  returnChar = [
    'm', 'X', 'p', 'M', '*', 'D', '3', '£', '§', 't',
    'Y', 'y', '7', '.', 'w', '!', '%', 'g', 'A', 'u',
    '2', 'J', '9', '_', '@', '[', 'L', 'h', 'q', '0',
    'G', 'j', '^', 'Z', ']', 'I', '|', '>', 'B', 'c',
    'i', 'e', ';', '~', ':', 'P', '±', 'k', 'S', '&',
    '+', 'l', 'a', ' ', 'R', ':', '}', 'n', 'z', 'F',
    '8', 'C', '-', '?', 'x', '5', 'U', 'K', 'v', '=',
    '<', '1', 'd', '{', 'N', 'O', 'b', '$', 'Q', 'H',
    '(', '\\', '4', ')', 's', '6', 'V', 'o', 'W', '"',
    'E', "'", 'r', '/', '`', 'f', 'T',
  ];
  encrypt(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      result += this.returnChar[this.characters.indexOf(str.charAt(i))];
    }
    return result;
  }
  decrypt(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      result += this.characters[this.returnChar.indexOf(str.charAt(i))];
    }
    return result;
  }
}

function main() {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.error("Usage: cipher <cipher_type> <operation> <file> [key]");
    process.exit(1);
  }

  let [cipherType, operation, file, key] = args;

  try {
    const text = fs.readFileSync(file, "utf8");
    let result = "";

    if (cipherType === "ln") {
      if (!key) {
        key = 0; // might need to make string
      }
      const lnCipher = new LetterNumberCipher();
      if (operation === "enc") {
        result = lnCipher.encrypt(text, parseInt(key));
      } else if (operation === "dec") {
        result = lnCipher.decrypt(text, parseInt(key));
      } else {
        console.error(
          'Invalid operation. Use "enc" for encrypt or "dec" for decrypt.'
        );
        process.exit(1);
      }
    } else if (cipherType === "ll") {
      const llCipher = new LetterLetterCipher();
      if (operation === "enc") {
        result = llCipher.encrypt(text);
      } else if (operation === "dec") {
        result = llCipher.decrypt(text);
      } else {
        console.error(
          'Invalid operation. Use "enc" for encrypt or "dec" for decrypt.'
        );
        process.exit(1);
      }
    } else {
      console.error(
        'Invalid cipher type. Use "ln" for letter-number or "ll" for letter-letter.'
      );
      process.exit(1);
    }

    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

main();