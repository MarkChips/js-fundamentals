# Secret Cipher CLI

A command-line tool for encrypting and decrypting text using Letter-Number and Letter-Letter ciphers.

## Installation

#### Install for current project:

`npm install @mark-chips/secret`

#### Install globally:

`npm install -g @mark-chips/secret`

## Usage

`secret <cipher_type><operation><file>[key]`

- `<cipher_type>`: 'ln' for Letter-Number cipher, 'll' for Letter-Letter cipher
- `<operation>`: 'enc' for encrypt, 'dec' for decrypt
- `<file>`: Path to the input file
- `[key]`: (Optional) Numerical key for Letter-Number cipher

### Examples

- secret ln enc message.txt 5
- secret ln dec message.txt.enc 5
- secret ll enc message.txt
- secret ll dec message.txt.enc
