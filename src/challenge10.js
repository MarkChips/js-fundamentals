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
