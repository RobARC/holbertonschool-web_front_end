#!/usr/bin/node

function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        let primo = true;
        const root = Math.round(Math.sqrt(i));
        for (let j = 2; j <= root; j++) {
            if (i % j === 0) {
                primo = false;
                break;
            }
        }
        if (primo) {
            count++;
        }
    }
    return count;
}

const myPerformance = require('perf_hooks').performance;
const startTime = myPerformance.now();
for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}
const endTime = myPerformance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);