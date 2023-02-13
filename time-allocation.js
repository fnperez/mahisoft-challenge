const search = (target, numbers, cache) => {
    if (target === 0) {
        return true;
    }
    if (target < 0 || numbers.length === 0) {
        return false;
    }

    const cacheKey = `${target},${numbers.length}`;
    if (cacheKey in cache) {
        return cache[cacheKey]
    }

    const [first, ...rest] = numbers;
    const found = search(target - first, rest, cache) ||
        search(target, rest, cache);

    cache[cacheKey] = found

    return found;
};

function solution(target, numbers) {
    if (target === 0 || numbers.length === 0) {
        return target === 0;
    }

    const cache = {};

    const found = search(target, numbers, cache);

    return found
}