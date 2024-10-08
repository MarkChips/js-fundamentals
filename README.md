# JS Fun-damentals

My very first custom npm package for encryption. This can be installed on any machine (that has node.js) via the terminal. To skip the intro and start reading more about it, including installation, [click here](#secret-cipher-cli).

Contained within this repository are my answers to challenges set by the bootcamp: Digital Futures. The culmination of the challenges enabled me to publish my very first npm package.

## Where to find my work

All my answers to the challenges can be found in the folder ['src'](src).

The actual challenge questions can be found in the ['challenges'](challenges) folder.

## Technologies used:

JavaScript

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
