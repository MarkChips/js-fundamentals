/* I want to be able to add a simple key to my encryption that offsets the table value by the given amount.

Your implementation should
- Be well-encapsulated using a `class` called `LetterNumber`
- Use this [character set](https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745)
- Be agnostic to the actual values - the character values might change

NB: plaintext = starting string. ciphertext = encrypted string
NB: Each encrypted plaintext character should never be more than two ciphertext characters. If the evaluation of the encrypted character value is > 99, then reset from 0 and continue adding. Consequently, each encrypted plaintext character should always be two ciphertext characters: if the encrypted plaintext character results in a value of '8'  it should be '08' in ciphertext characters. See below for more test cases.

### Acceptance Criteria
```js
letterNumber.encrypt("a", 1) // "03"
letterNumber.encrypt("Ed", 4) // "3609"
letterNumber.encrypt("Hi, Ed!", 302) // "37128003340756"
```*/


class LetterNumber {
    twoDigit(number) {
        const modulo = String(number % 100);
        return modulo.padStart(2, '0');
    }
    encrypt(str, n) {
        const characters = ` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@£$%^&*()-_=+[]{};:\'"\\|,.<>/?\`~§±1234567890`;
        let encryptedStr = '';
        for (let i = 0; i < str.length; ++i) {
            encryptedStr += this.twoDigit(characters.indexOf(str[i]) + 1 + n);
        }
        return encryptedStr;
    };
};

const letterNumber = new LetterNumber();

console.log(letterNumber.encrypt("a", 1)); //prints 03
console.log(letterNumber.encrypt("Ed", 4)); //prints 3609
console.log(letterNumber.encrypt("Hi, Ed!", 302)); //prints 37128003340756