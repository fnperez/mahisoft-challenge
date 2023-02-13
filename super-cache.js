function solution(t, input_arr) {
    const cacheSlots = []

    let timePassedSinceLastUpdate = 0
    let biggestTime = Number.MIN_SAFE_INTEGER

    input_arr.forEach((id) => {
        const cacheSize = cacheSlots.length;
        const presentInCache = cacheSlots.includes(id)
        
        if (cacheSize < t && !presentInCache) {
            cacheSlots.push(id)

            return
        }

        if (presentInCache) {
            timePassedSinceLastUpdate++

            return
        }

        
        cacheSlots.shift()

        cacheSlots.push(id)

        if (biggestTime < timePassedSinceLastUpdate) {
            biggestTime = timePassedSinceLastUpdate
            timePassedSinceLastUpdate = 0
        }
    })

    return biggestTime
}