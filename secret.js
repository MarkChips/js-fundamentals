#!/usr/bin/env node

import {
  llCipher,
  lnCipher
} from './src/challenge10.js';
import fs from 'fs';

function main() {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.error("Usage: ./secret.js <cipher_type> <operation> <file> [key]");
    process.exit(1);
  }

  let [cipherType, operation, file, key] = args;

  try {
    const text = fs.readFileSync(file, "utf8");
    let result = "";
    let outputFile = "";

    if (cipherType === "ln") {
      if (!key) {
        key = 0;
      }
      if (operation === "enc") {
        result = lnCipher.encrypt(text, parseInt(key));
        outputFile = `${file}.enc`;
      } else if (operation === "dec") {
        result = lnCipher.decrypt(text, parseInt(key));
        outputFile = file.replace('.enc', '');
      } else {
        console.error(
          'Invalid operation. Use "enc" for encrypt or "dec" for decrypt.'
        );
        process.exit(1);
      }
    } else if (cipherType === "ll") {
      if (operation === "enc") {
        result = llCipher.encrypt(text);
        outputFile = `${file}.enc`;
      } else if (operation === "dec") {
        result = llCipher.decrypt(text);
        outputFile = file.replace('.enc', '');
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

    fs.writeFileSync(outputFile, result);
    console.log(`Operation completed. Result saved to ${outputFile}`);
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

main();