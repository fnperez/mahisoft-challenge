function solution(numbers, target) {
    if (numbers.length === 0) {
        return target === 0;
    }

    const [first, ...rest] = numbers;

    return solution(rest, target - first) || solution(rest, target);
}
