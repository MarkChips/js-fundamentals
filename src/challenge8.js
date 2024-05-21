/* When I got home today, there was a note in my pocket with a ton of numbers on it, and the number 4771 circled! I think someone's left me an encrypted message!
I need a way to decrypt a letter-number encrypted string given a key!

Your implementation should
- Be well-encapsulated using a `class` called `LetterNumber`
- Use this [character set](https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745)
- Be agnostic to the actual values - the character values might change
*/
class LetterNumber {
    characters = ` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@£$%^&*()-_=+[]{};:\'"\\|,.<>/?\`~§±1234567890`;
    twoDigit(number) {
        const modulo = number % 100;
        return modulo.toString().padStart(2, '0');
    }
    encrypt(str, n) {
        let encryptedStr = '';
        for (let i = 0; i < str.length; ++i) {
            encryptedStr += this.twoDigit(this.characters.indexOf(str[i]) + 1 + n);
        }
        return encryptedStr;
    }
    splitStringIntoPairs(inputString) {
        return inputString.toString().match(/.{1,2}/g);
    }
    decrypt(encryption, key) {
        const modulo = key % 100;
        const byTwos = this.splitStringIntoPairs(encryption);
        let decryption = '';
        for (let i = 0; i < byTwos.length; ++i) {
            decryption += this.characters[(100 + (byTwos[i] - modulo - 1)) % 100];
        }
        return decryption;
    }
};
const letterNumber = new LetterNumber();
console.log(letterNumber.decrypt('0681497203762572077292808186837291878577878677459172878672928772928081917275818880779025', 4771));
console.log(letterNumber.decrypt('21774590777279878686737286777776729287727587857772938872958192807273728677957287867750', 4771));
console.log(letterNumber.decrypt('0772928081868372077280739477728293919272928077729280818679507299728477929277903584779292779072919374919281929392818786727581888077902572107792459172768772819225', 4771));
let plaintext = "hello, world";
let key = 5;
console.log(plaintext === letterNumber.decrypt(letterNumber.encrypt(plaintext, key), key)); // returns true