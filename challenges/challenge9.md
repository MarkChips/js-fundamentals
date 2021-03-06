#### Requirements

We have a new requirement! We need to build a letter-letter substitution cipher quickly so we can decrypt the next message that pops into our pocket mysteriously!

- NB: Use [characterSet1](https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745) for the Letter Number cipher and [characterSet2](https://gist.github.com/dearshrewdwit/5c4f0460066c16d14e512576a446403a) for the Letter Letter cipher
- NB: Ciphers should assume a valid character set
- NB: Create more test cases to help you develop your program and cover different code paths.

### Acceptance Criteria
```js
let plaintext = 'Look over there!'
let key = 31045

// Letter Number test cases
console.log(letterNumberCipher.encrypt(plaintext, key)) // "97747470597481647759796764776413"
console.log(letterNumberCipher.decrypt("97747470597481647759796764776413", key)) // 'Look over there!'

// Letter Letter test cases
console.log(letterLetterCipher.encrypt(plaintext)) // "B!!ym!9DAm2§DAD "
console.log(letterLetterCipher.decrypt("B!!ym!9DAm2§DAD ")) // 'Look over there!'

// another way to test your program
console.log(plaintext === letterNumberCipher.decrypt(letterNumberCipher.encrypt(plaintext, key), key))
console.log(plaintext === letterLetterCipher.decrypt(letterLetterCipher.encrypt(plaintext)))
```