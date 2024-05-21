/*I want to be able to encrypt a string using letter-number substitution according to this [table of values](https://gist.github.com/dearshrewdwit/691c71616995ad2430ab309aa9998745)
```
"E" -> "32"
"d" -> "5"
"Ed" -> "325"
"Hi, Ed!" -> "351078132554"
``` */
function encrypt(str) {
    const characters = ` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@£$%^&*()-_=+[]{};:\'"\\|,.<>/?\`~§±1234567890`;
    let encryptedStr = "";
    for (let i = 0; i < str.length; ++i) {
        encryptedStr += characters.indexOf(str[i]) + 1;
    }
    return encryptedStr;
};
console.log(encrypt('Hi, Ed!')) //prints 351078132554