/*
it finds all the divisors by iterating to num/2, because after num/2 no number will be divisor of num
*/
const findDivisors = (num) => {
    if (typeof num !== 'number') {
        throw new Error('num it is not a number')
    }

    let divisors = [];

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
        divisors.push(i);
        }
    }

    return divisors;
}

const sum = (prevDivisor, divisor) => prevDivisor + divisor
    
function solution(numA, numB) {
    const divisorsA = findDivisors(numA)
    const divisorsB = findDivisors(numB)

    const sumA = divisorsA.reduce(sum, 0)
    const sumB = divisorsB.reduce(sum, 0)

    return sumA === numB && sumB === numA
}