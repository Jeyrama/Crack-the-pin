/*
Given is a md5 hash of a five digits long PIN. It is given as string. 
Md5 is a function to hash your password: "password123" ===> "482c811da5d5b4bc6d497ffa98491e38"

Why is this useful? Hash functions like md5 can create a hash from string in a 
short time and it is impossible to find out the password, if you only got the hash.

The only way is cracking it, means try every combination, hash it and compare it with the 
hash you want to crack. (There are also other ways of attacking md5 but that's another story) 

Every Website and OS is storing their passwords as hashes, 
so if a hacker gets access to the database, he can do nothing, 
as long the password is safe enough.

Your task is to return the cracked PIN as string.

Note: 
  Many languages have built-in tools to hash md5.
*/


// Solution

function crack(hash) {
  let crypto = require('crypto');
  for (let i = 0; i<100000; i++) {
    let a = ('00000'+i).slice(-5)
    if(crypto.createHash('md5').update(a).digest("hex") == hash) return a;
  }
}

// or

let crypto = require('crypto');

function MD5(str) {
  return crypto.createHash('md5').update(str).digest('hex')
}

function crack(hash){
  for (let a = 0; a < 10; a++) {
        for (let b = 0; b < 10; b++) {
            for (let c = 0; c < 10; c++) {
                for (let d = 0; d < 10; d++) {
                    for (let e = 0; e < 10; e++) {
                        if (MD5(`${a}${b}${c}${d}${e}`) === hash) {
                          return `${a}${b}${c}${d}${e}`;
                        }
                    }
                }
            }
        }
    }
}

// or

let crypto = require('crypto');

function crack(hash){
  for(let i = 0; i <= 99999; i++) { 
    let pin = String(i);
    if(pin.length < 2) pin = '0000'+''+ pin;
    if(pin.length < 3) pin = '000'+''+ pin;
    if(pin.length < 4) pin = '00'+''+ pin;
    if(pin.length < 5) pin = '0'+''+ pin;
    if(crypto.createHash('md5').update(String(pin)).digest("hex") === hash) return pin;
  }
}