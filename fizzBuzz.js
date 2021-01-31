'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    // Write your code here
    for(let i=1; i<=n; i++) {
        const nMod3 = i % 3;
        const nMod5 = i % 5;
        let answer = "";
        if (nMod3 === 0) answer = answer + "Fizz";   
        if (nMod5 === 0) answer = answer + "Buzz";   
        if (answer === "") answer = i;   
        console.log(answer);
    }
}

function main() {
